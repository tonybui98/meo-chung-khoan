import {connect, styled, Global} from "frontity"
import Slider from "../slider"
import NewList from "../list-news";
import NewSlider from "../news-slider";
import { Ticker } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";

const Home = () => {

  return(
    <div>
    <Section className="wrapper py-3 w-100">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <Slider />
              </div>
              <div className="col-12 col-md-4"> 
                  <NewList />
              </div>
          </div>
        </div>
      </Section>
      <Section className="wrapper py-3 w-100">
          <div className="container">
              <div className="row">
                <div className="col-12 mb-3">
                  <Ticker colorTheme="dark"></Ticker>
                </div>
                <div className="col-12 mb-3">
                    <NewSlider/>
                </div>
              </div>
          </div>
       </Section>

      <Section className="wrapper py-3 w-100">
        <div className="container">
                <div className="row">
                  <div className="col-12">
                    <NewHeading>
                        Phân tích kỹ thuật
                    </NewHeading>
                  </div>
                  <div className="row col-12">
                    <div className="col-12 col-md-4 mb-3">
                      <MarketOverview colorTheme="dark" width={'100%'} height={490} showFloatingTooltip></MarketOverview>
                    </div>
                      <div className="col-12 col-md-4 mb-3">
                      <NewList />
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                      <NewList />
                    </div>
                  </div>
              </div>
          </div>
      </Section> 
      <Section className="wrapper py-3 w-100">
        <div className="container">
                <div className="row">
                  <div className="col-12">
                    <NewHeading>
                        Phân tích kỹ thuật
                    </NewHeading>
                  </div>
                  <div className="col-12">
                      <NewSlider/>
                  </div>
              </div>
          </div>
      </Section> 
      <Section className="wrapper py-3 w-100">
        <div className="container">
                <div className="row">
                  <div className="col-12">
                    <NewHeading>
                        Phân tích kỹ thuật
                    </NewHeading>
                  </div>
                  <div className="col-12">
                      <NewSlider/>
                  </div>
              </div>
          </div>
      </Section>
      <Section className="wrapper py-3 w-100">
        <div className="container">
                <div className="row">
                  <div className="col-12">
                    <NewHeading>
                        Phân tích kỹ thuật
                    </NewHeading>
                  </div>
                  <div className="col-12">
                      <NewSlider/>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
}

export default connect(Home);

const Section = styled.section`
  width: 100%;
  display: block;
`;
const NewHeading = styled.h3`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  font-size: 22px;
  padding-bottom: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;