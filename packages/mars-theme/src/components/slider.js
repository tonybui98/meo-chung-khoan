import React, {useState, useEffect} from 'react';
import { Global, connect, styled } from 'frontity';
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import Button from '@mui/material/Button';

import Carousel from 'react-multi-carousel';
import carouselStyled from 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = () => {

  const [sliderContent , setSliderContent] = useState([]);

  const FetchPost = async () => {
    await axios.get('https://meochungkhoan.com/dashboard/wp-json/wp/v2/posts?per_page=3')
      .then(function (response) {
        setSliderContent(response.data);
      });
  }

  useEffect(() => FetchPost() , []);
  return (
    <>
      <Global styles={carouselStyled} />
      <Carousel responsive={responsive}>
        {
          sliderContent.map((data) => {
            return(
              <div className="position-relative" key={data.id}>
                <SliderThumbnail className="position-relative overflow-hidden border-radius-lg">
                  <SliderImage className={"position-absolute top-0 start-0 w-100"}
                      alt={data.title.rendered}
                      height={'100%'}
                      src={data.featured_image_src} // use normal <img> attributes as props
                      width={'auto'} />
                </SliderThumbnail>
               <SliderContent>
                  <h3>{data.title.rendered}</h3>
                  <p>{ReactHtmlParser(data.excerpt.rendered.slice(0, 180) + "...")}</p>
                  <Button href="#" className="text-white float-right" variant="contained"><i className="bi bi-arrow-right"></i> Xem thêm</Button>
               </SliderContent>
              </div>
            );
          })
        }
      </Carousel>
    </>
  );
}
export default connect(Slider);
const SliderContent = styled.div`
    background: black;
    position: absolute;
    bottom: 20px;
    width: 90%;
    left: 5%;
    z-index: 1;
    padding: 20px;
    text-align: left;
    h3{
      color: white;
      text-align: left;
      font-size: 18px;
    }
    p{
      color: white;
      text-align: left;
      font-size: 14px;
    }
    button{
      float: right;
    }
`;
const SliderThumbnail = styled.div`
    padding-top: 65%;
    display: block;
`;
const SliderImage = styled.img`
    z-index: 0;
    min-height: 100%;
    width: auto;
`;