import React, {useState, useEffect} from "react";
import "../assets/styles/productfamous.css";
import Card from "./Card";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";
import {ApiURL} from './config'

function ProductFamous() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const [data, setData] = useState([])
  useEffect(() => {
    
    fetch(ApiURL + "api/all/product")
      .then(response => response.json())
      .then(json => setData(json));
  }, [])
  
  const context = React.useContext(Context);
  return (
    <div className="product__famous">
      <div className="container">
        <h1 className="title"><FormattedMessage id="famous_products"/></h1>
        <Slider {...settings} className="my__slide">
          {
            data?.map(item => 
           <Link to={'/products/'+ item.id}>
            <div className="product__slide">
              <Card data={item}/>
            </div>  
            </Link>
            )
          }
        </Slider>
          {
            window.innerWidth < 768 && <div className="mobile">
            {
              data?.slice(0,4).map(item => 
              <Link to={'/products/'+ item.id}>
                <div className="product__slide">
                  <Card data={item}/>
                </div>  
              </Link>
              )
            }
          </div>
          }
      </div>
    </div>
  );
}

export default ProductFamous;
