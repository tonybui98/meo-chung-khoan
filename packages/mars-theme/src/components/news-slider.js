import React, {useState, useEffect} from 'react';
import { Global, connect, styled } from 'frontity';
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import Button from '@mui/material/Button';
import Carousel from 'react-multi-carousel';
import carouselStyled from 'react-multi-carousel/lib/styles.css';
import Link from './link';
import moment from 'moment';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = () => {

  const [sliderContent , setSliderContent] = useState([]);

  const FetchPost = async () => {
    await axios.get('https://meochungkhoan.com/dashboard/wp-json/wp/v2/posts?per_page=5')
      .then(function (response) {
        setSliderContent(response.data);
      });
  }

  useEffect(() => FetchPost() , []);
  
  return (
    <>
      <Global styles={carouselStyled} />
      <Carousel 
          containerClass="sliderGap"
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
      >
        {
          sliderContent.map((data) => {
            const slug = data.link;
            const hour = moment(data.date_gmt).locale('vi').startOf('hour').fromNow();
            return( 
              <div className="position-relative" key={data.id}>
                <SliderThumbnail className="position-relative overflow-hidden border-radius-lg">
                  <SliderImage className={"position-absolute top-0 start-0 w-100"} src={data.featured_image_src} />
                </SliderThumbnail>
               <SliderContent>
                  <NewMeta className="text-sm text-mute float-right"><i class="bi bi-calendar"></i> {hour}</NewMeta>
                  <h3>{data.title.rendered}</h3>
                  <p>{ReactHtmlParser(data.excerpt.rendered.slice(0, 180) + "...")}</p>
                  <Link link={slug}>
                      <Button className="text-white float-right" variant="contained"><i className="bi bi-arrow-right"></i> Xem thêm</Button>
                  </Link>
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
const NewMeta = styled.span`
  font-size: 9px;
  color: #4e4e4e;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
`
const SliderContent = styled.div`
    padding: 20px;
    text-align: left;
    h3{
      text-align: left;
      font-size: 18px;
    }
    p{
      text-align: left;
      font-size: 14px;
    }
    button{
      float: right;
    }
`;
const SliderThumbnail = styled.div`
    padding-top: 60%;
    display: block
`;
const SliderImage = styled.img`
    z-index: 0;
`;