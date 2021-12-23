import React, {useState, useEffect} from "react";
import { connect, styled } from "frontity";
import axios from "axios";
import LoginImageUrl from "../../images/financial-data.jpg";
import validator from 'validator';


const Login = () => {
  
  const[account, setAccount] = useState('');
  const[password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    
    const data = {
      'username': account,
      'password': password 
    };

    const config = {
      method: 'post',
      url: 'https://meochungkhoan.com/dashboard/wp-json/jwt-auth/v1/token',
      data : data
    };

    axios(config)
    .then(function (response) {
      sessionStorage.setItem('user', JSON.stringify(response.data));
    }) 

  };

  useEffect(() => {
      console.log(validator.isEmail(account))
    }, [account])

    return( 
        <>
          <div className="container py-4">
            <div className="bg-white rounded p-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 h-100 d-md-block d-none">
                <img className="rounded w-100" src={LoginImageUrl} />
              </div>
              <div className="col-12 col-md-6 h-100">
                <FormStyled onSubmit={(e) => {handleSubmit(e)}}>
                    <h3 className="text-center mb-3 fw-bolder">Đăng nhập</h3>
                    <div className="inputGroup mb-3">
                        <input type="text" id="outlined-basic" className="w-100" label="Tên đăng nhập/ Địa chỉ Email" value={account} onChange={(el) => setAccount(el.target.value)}/>
                    </div>
                    <div className="inputGroup mb-3">
                        <input type="password" id="outlined-basic" className="w-100" label="Nhập mật khẩu" value={password} onChange={(el) => setPassword(el.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary d-block w-100 text-center py-3">
                        <i class="bi bi-box-arrow-in-right me-2"></i>
                        Đăng nhập
                      </button>
                </FormStyled>
                </div>
              </div>
              </div>
          </div>
        </>
    );
}

export default connect(Login);

const FormStyled = styled.form`
  max-width: 380px;
  margin: auto;
`;