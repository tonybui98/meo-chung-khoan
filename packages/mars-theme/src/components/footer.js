import React, {useState, useEffect} from "react";
import { Global ,connect , styled } from "frontity";
import Link from "./link";
import axios from "axios";

const DataUrl = `https://meochungkhoan.com/dashboard/wp-json/acf/v3/options/options`;

const Footer = () => {
  const [widget_1 , setWidget_1] = useState({
      title: '',
      description: ''
  });
  const [widget_2 , setWidget_2] = useState({
      title: '',
      navigation: []
  });

  const [widget_3 , setWidget_3] = useState({
    title: '',
    navigation: []
  });

  useEffect(() => {
      axios.get(DataUrl)
      .then((res) => {
        setWidget_1(res.data.acf.footer.widget_col_1);
        setWidget_2(res.data.acf.footer.widget_col_2);
        setWidget_3(res.data.acf.footer.widget_col_3);
      }
    )}, []);
  console.log(widget_3);
  return(
    <>
      <div className="container py-4">
          <div className="row">
              <div className="col-12 col-md-3">
                  <div className="footer-widget">
                      <FooterHeaderTitle>{widget_1.title}</FooterHeaderTitle>
                      <p>{widget_1.description}</p>
                  </div>
              </div>
              <div className="col-12 col-md-3">
                  <div className="footer-widget">
                      <FooterHeaderTitle>{widget_2.title}</FooterHeaderTitle>
                      <ul className="p-0 m-0">{
                          widget_2.navigation.map((data ,  index) =>{
                            return(
                              <li key={index} className="d-block">
                                <Link link={"/" + data.page.post_name} key={index}>{data.title}</Link>
                              </li>
                              );
                          })
                        }</ul>
                  </div>
              </div>
              <div className="col-12 col-md-3">
                  <div className="footer-widget">
                      <FooterHeaderTitle>{widget_3.title}</FooterHeaderTitle>
                      <ul className="p-0 m-0">{
                          widget_3.navigation.map((data ,  index) =>{
                            return(
                              <li key={index} className="d-block">
                                <Link link={"/" + data.page.post_name} key={index}>{data.title}</Link>
                              </li>
                              );
                          })
                        }</ul>
                  </div>
              </div>
              <div className="col-12 col-md-3">
                  <div className="footer-widget">
                      <FooterHeaderTitle>{widget_1.title}</FooterHeaderTitle>
                      <p>{widget_1.description}</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="bottomFooter bg-dark">
        <div className="container">
            <p className="mb-0 text-sm text-light py-2">Copyright @{new Date().getFullYear()} by <a href="https://southteam.studio" target="_blank">Southteam.studio</a>. All right reserved.</p>
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