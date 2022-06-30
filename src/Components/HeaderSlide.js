import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../assets/styles/headerslide.css";
import Animate from "./Animate";
import {ApiURL} from './config'
function HeaderSlide({lang}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [data, setdata] = React.useState([])
  React.useEffect(() => {
    fetch(ApiURL + "api/home/all")
      .then(response => response.json())
      .then(json => setdata(json))
  }, []);
  return (
    <div className="header__slide">
      <div className="container">
        <Slider {...settings}>
          {
              data?.map(
                  item => 
                    <div>
                        <div className="slide__row">
                            <div className="item_hs">
                            <Animate element={<h1 className="title">{lang === 'uz' ? item?.title_uz : lang === 'en' ? item?.title_en : item?.title_ru}</h1>}/>
                            <Animate element={<p>{lang === 'uz' ? item?.name_uz : lang === 'en' ? item?.name_en : item?.name_ru}</p>}/>
                            <Animate element={<button className="btn">Explore Catalogue</button>}/>
                            </div>
                            <div className="item_hs">
                            <Animate element={<img src={ApiURL + "cover/"+item?.cover} alt={item?.title} />}/>
                            </div>
                        </div>
                    </div>
              )
          }
         
        </Slider>
      </div>
      <div className="ribbon">
          <div className="container">
          <div className="row">
             {
                 [1,2,3,4,5].map( item =>  
                 <div className="item__ribbon">
                    <small>April 16, 2021</small>
                    <p>
                    Design tips for designers, that cover everything you need
                    </p>
                 </div> )
             }
          </div>
          </div>
      </div>
    </div>
  );
}

export default HeaderSlide;
