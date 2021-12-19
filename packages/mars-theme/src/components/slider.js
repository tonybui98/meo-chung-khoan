import { Carousel } from 'react-responsive-carousel-2';
import React, {useState, useEffect} from 'react';
import carouselStyled from "react-responsive-carousel-2/lib/styles/carousel.min.css"; // requires a loader
import { Global, connect, styled } from 'frontity';
import axios from "axios";

const Slider = () => {

  const [sliderContent , setSliderContent] = useState([]);

  const FetchPost = async () => {
    await axios.get('https://meochungkhoan.com/dashboard/wp-json/wp/v2/posts?per_page=3')
      .then(function (response) {
        setSliderContent(response.data);
      });
  }

  useEffect(() => FetchPost() , []);

  console.log(sliderContent);
  return (
    <>
      <Global styles={carouselStyled} />
      <div className='container'>
      <Carousel>
        {
          sliderContent.map((data) => {
            return(
              <div key={data.id}>
                <SliderThumbnail className="position-relative overflow-hidden">
                  <SliderImage className={"position-absolute top-0 start-0 w-100"} src={data.featured_image_src} />
                </SliderThumbnail>
               <SliderContent className="text-left legend">
                  <h3>{data.title.rendered}</h3>
                  <p>{data.excerpt.rendered}</p>
                  <a className="btn btn-primary" href={"#"}>Xem thêm</a>
               </SliderContent>
              </div>
            );
          })
        }
      </Carousel>
      </div>
    </>
  );
}
export default connect(Slider);
const SliderContent = styled.div`
    padding: 20px;
`;
const SliderThumbnail = styled.div`
    padding-top: 60%;
    display: block
`;
const SliderImage = styled.img`
    z-index: 0;
`;