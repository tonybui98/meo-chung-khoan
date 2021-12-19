import React, {useState} from 'react';
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../images/logo.png"; 
const Header = ({ state }) => {
const [searchVal , setSearchValue] = useState('');
  return (
    <>
      <Container className="container py-2">
        <div className={'row align-items-center w-100'}>
            <div className={'col-md-6 col-12'}>
              <StyledLink link="/">
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
            <div className={'col-md-6 col-12'}>
              <div className="input-group mb-3">
                <input type="text" value={searchVal} onChange={() => setSearchValue(this.target.value)} className="form-control" placeholder="Tìm kiếm..." />
                <button className="btn btn-primary" type="button" id="button-addon2">
                    <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
        </div>
        <MobileMenu />
      </Container>
      <Navigation>
        <Container className="container">
          <div className="row">
           <div className="col-8">
              <Nav className="w-100"/>
            </div>
            <div className={"d-flex flex-wrap gap-3 justify-content-end align-items-center col-4"}>
              <button className={'btn btn-primary'}><i className="bi bi-box-arrow-in-right"></i> Đăng nhập</button>
              <button className={'btn btn-outline-primary'}><i className="bi bi-person-circle"></i> Đăng ký</button>
            </div>
          </div>
        </Container>
      </Navigation>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div``;

const Navigation = styled.div`
  background: #2f3542;
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
