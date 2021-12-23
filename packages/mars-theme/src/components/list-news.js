import React, {useState, useEffect} from 'react'
import { Global, connect, styled } from 'frontity';
import NewsTemplates from "./templates/news-card"
import axios from "axios";

const NewsList = () => {
   
  const [postData, setPostData] = useState([]);
  
    const FetchPost = async () => {
      await axios.get('https://meochungkhoan.com/dashboard/wp-json/wp/v2/posts?per_page=3')
        .then(function (response) {
          setPostData(response.data);
        });
    }
  
    useEffect(() => FetchPost() , []);
   
    return(
      <>
        {
           postData.map((data, index) => (<NewsTemplates key={index} data={data}/>))
        }
      </>
    );

}

export default connect(NewsList);