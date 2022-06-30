import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import truck from "../assets/img/truck.svg";
import check from "../assets/img/check.svg";
import ProductFamous from "../Components/ProductFamous";
import stol from "../assets/img/stol.png";
import Contact from "../Components/Contact";
import ScrollTop from "../Components/ScrollTop";
import { useParams } from "react-router-dom";
import Animate from "../Components/Animate";
import { Context } from "../Components/Wrapper";
import parse from 'html-react-parser';
import {ApiURL} from '../Components/config'

function Product() {
  const param = useParams()
  const [data, setdata] = useState({})
  useEffect(() => {
    fetch(ApiURL + "api/product/info/" + param.id)
      .then(response => response.json())
      .then(json => setdata(json));
  }, []);
  const context = React.useContext(Context);
  const lang = context.locale
  return (
    <div>
      <ScrollTop />
      <div className="container">
        <div className="product">
          <h1 className="title">{
            lang === 'uz' ? data?.Title_uz : lang === 'en' ? data?.Title_en : data?.Title_ru
            }</h1>
          <div className="section__slide">
            <Carousel>
             
           {
             data?.images?.map(item =>
              <div>
                <img src={ApiURL + "images/" + item?.image }/>
              </div>
              )
           }
            </Carousel>
            <div className="text__section">
              <h2>{
            lang === 'uz' ? data?.name_uz : lang === 'en' ? data?.name_en : data?.name_ru
            }</h2>
              <br />
              <h1>${data?.price}</h1>
              <br />
              <p>
              {
            lang === 'uz' ? data?.min_desc_uz : lang === 'en' ? data?.min_desc_en : data?.min_desc_ru
            }
              </p>
              <br />
              <div className="gray">
                <div className="row">
                  <img src={truck} alt="" />
                  <p>
                    <b>Bepul yetkazib berish </b>
                    <br />
                    <span>Yetkazib berish xizmati bepul</span>
                  </p>
                </div>

                <div className="row">
                  <img src={check} alt="" />
                  <p>
                    <b>Qaytib olish shartlari</b>
                    <br />
                    <span>Learn More</span>
                  </p>
                </div>
              </div>
              <br />
              <Animate
                element={
                  <button className="btn w_100">Hoziroq xarid qilish</button>
                }
              />
            </div>
          </div>
          <h1 className="title">Description</h1>
          <p className="description">
          {parse(`<p>${lang === "uz"
                    ? data?.description_uz
                    : lang === "en"
                    ? data?.description_en
                    : data?.description_ru}</p>`)}
          </p>
        </div>
      </div>
      <ProductFamous />
      <div className="recomend">
        <div className="container">
          <div className="row__recomend">
            <div className="col">
              <h1 className="title">Recommendatiion of the day $15</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum.
              </p>
            </div>
            <img src={stol} alt="" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Product;
