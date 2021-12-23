import React, {useState , useEffect} from 'react';
import { connect, styled } from "frontity";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../images/logo.png"; 
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'; 
import { TickerTape } from "react-ts-tradingview-widgets";
import Link from "./link";
import { StickyNav } from "react-js-stickynav";

const UserSign = () => { 

  const [userDetail, setUserDetail] = useState({
    token: "",
    user_email: "",
    user_nicename: "",
    user_display_name: "",
  });

  const [userUrl, setUserUrl] = useState('');

  useEffect(() => {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(dataUser);
    const Url = "";
    if(dataUser != null){
        console.log("Token : " ,  dataUser.token);
        const objectUser = {
          token: dataUser.token,
          user_email: dataUser.user_email,
          user_nicename: dataUser.user_nicename,
          user_display_name: dataUser.user_display_name,
        }
        setUserDetail(objectUser);
        setUserUrl('dashboard');
    } else {
      setUserUrl('dang-nhap');
    }
  }, []);

  return(
      <>
        <Link link={userUrl}>
                <Button variant="contained" color="primary">
                  <i className="bi bi-box-arrow-in-right me-1"></i> {userDetail.user_nicename ? userDetail.user_nicename : "Đăng nhập"}
               </Button>
        </Link>
        {
          userDetail.user_nicename ? "":
            <Link link={'/dang-ky/'}>
              <Button variant="contained" color="success">
                  <i className="bi bi-person-circle me-1"></i> Đăng ký </Button>
            </Link>
        }
      </>
  );
}

const Header = ({ state }) => {

  const [searchVal , setSearchValue] = useState('');

  return (
    <div className="w-100">
        <div className={'row align-items-center w-100 d-none'}>
          <div className={'col-md-6 col-12'}>
              <StyledLink className="py-1" link="/">
                <div className={'d-flex align-items-center gap-3'}>
                  <div className="brading">
                    <ImageBrand src={Logo} alt={'Mẹo chứng khoán'} /> 
                  </div>
                  <div className="headerBranding">
                    <Title>{state.frontity.title}</Title>
                    <Description>{state.frontity.description}</Description>
                  </div>
                </div>
              </StyledLink>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-group rounded position-relative d-flex justify-content-end">
                <InputStyled type="text" value={searchVal} onChange={() => setSearchValue(this.target.value)} className="py-1 px-2 rounded bg-light" placeholder="Tìm kiếm..." />

              </div>
            </div>
        </div>
      <MobileMenu />
      <StickyNav className="w-100" length='40'>
      <Navigation>
        <Container className="container">
          <div className="row">
           <div className="col-12 col-md-8">
              <div className='d-flex align-items-center'>
                <StyledLink className="py-1" link="/">
                  <ImageBrand src={Logo} alt={'Mẹo chứng khoán'} /> 
                </StyledLink>
                <Nav/>
              </div>
            </div>
            <div className="col-12 col-md-4">
                <div className='d-flex flex-wrap gap-3 justify-content-end align-items-center h-100'>
                    <UserSign />
                    <Button variant="contained" color="primary">
                        <i className="bi bi-search"></i>
                    </Button>
                </div>
            </div>
          </div>
        </Container>
      </Navigation>
      <div className="col-12">
             <TickerTape colorTheme="light" locale="vi"></TickerTape>
      </div>
      </StickyNav>
    </div>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
const Container = styled.div`
`;
const InputStyled = styled(Input)`
  width: calc(100% - 100px);
`;

const Navigation = styled.div`
  background: #131722;
  width: 100%;
`;
const ImageBrand = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 22px;
`;

const Description = styled.h4`
  margin: 0;
  color: black;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
