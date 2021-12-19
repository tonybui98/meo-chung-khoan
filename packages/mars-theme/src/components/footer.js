import React, {useState, useEffect} from "react";
import { Global ,connect , styled } from "frontity";
import axios from "axios";

const DataUrl = `https://meochungkhoan.com/dashboard/wp-json/acf/v3/options/options`;

const Footer = () => {
  const [footerData , setFooterData] = useState('');
  useEffect(() => {
      axios.get(DataUrl)
      .then((res) => {console.log(res.data)}
    )}, []);
  return(
    <>
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-4">
                  <div className="footer-widget">
                      <FooterHeaderTitle>Về Mẹo Chứng Khoán</FooterHeaderTitle>
                      <p>Mẹo chứng khoán là kênh </p>
                  </div>
              </div>
          </div>
      </div>
    </>
    );
}
export default connect(Footer);

const FooterHeaderTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
`;