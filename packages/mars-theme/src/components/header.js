import React, {useState , useEffect} from 'react';
import { connect, styled } from "frontity";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../images/logo.png"; 
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'; 
import { TickerTape } from "react-ts-tradingview-widgets";
import Link from "./link";

const LoginRegister = () => {

  return(
    <div className='d-flex flex-wrap gap-3 justify-content-end align-items-center h-100'>

        <Link link={'/dang-nhap/'}>
          <Button variant="contained" color="primary">
            <i className="bi bi-box-arrow-in-right me-1"></i> Đăng nhập
          </Button>
        </Link>
        <Link link={'/dang-ky/'}>
            <Button variant="contained" color="success">
              <i className="bi bi-person-circle me-1"></i> Đăng ký </Button>
        </Link>
      </div>
  );
}

const Header = ({ state }) => {
  const [searchVal , setSearchValue] = useState('');

  return (
    <>
      <Container className="container py-2">
        <div className={'row align-items-center w-100'}>
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
                <Button variant="contained" color="primary">
                    <i className="bi bi-search"></i>
                </Button>
              </div>
            </div>
        </div>
        <MobileMenu />
      </Container>
      <Navigation>
        <Container className="container">
          <div className="row">
           <div className="col-12 col-md-8">
              <Nav className="w-100"/>
            </div>
            <div className="col-12 col-md-4">
              <LoginRegister />
            </div>
          </div>
        </Container>
      </Navigation>
      <div className="col-12">
             <TickerTape colorTheme="light" locale="vi"></TickerTape>
      </div>
    </>
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
  width: 80px;
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
