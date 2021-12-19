import connect from "@frontity/connect"
import Slider from "../slider"
import NewList from "../list-news";
const Home = () => {

  return(
    <>
     <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <Slider />
              </div>
              <div className="col-12 col-md-4"> 
                  <NewList />
                  <div></div>
              </div>
          </div>
        </div>
    </>
  );
}

export default connect(Home);