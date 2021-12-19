import React, {useState, useEffect} from "react";
import { connect } from "frontity";
import axios from "axios";

const Login = () => {

  const[account, setAccount] = useState('');
  const[password, setPassword] = useState('');
  const[token, setToken] = useState('');
  
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
      console.log(JSON.stringify(response.data));
    }) 

  }

    return( 
        <>
          <div className="container">
            <div className="d-flex flex-wrap align-items-center">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <div className="inputGroup">
                        <label for={'Login'}>Tên đăng nhập</label>
                        <input className="form-control" value={account} onChange={(el) => setAccount(el.target.value)}/>
                    </div>
                    <div className="inputGroup">
                        <label for={'Login'}>Mật khẩu</label>
                        <input className="form-control" value={password} onChange={(el) => setPassword(el.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </form>
              </div>
          </div>
        </>
    );
}

export default connect(Login);