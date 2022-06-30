import React from "react";
import "../assets/styles/aboutus.css";
import deliver from "../assets/img/deliver.svg";
import dollar from "../assets/img/dollar.svg";
import flower from "../assets/img/flower.svg";
import garniture from "../assets/img/garniture.svg";
import stol from "../assets/img/stol.png";
import Animate from "./Animate";
import { FormattedMessage } from "react-intl";
function AboutUs() {
  return (
   <>
    <div className="about__us">
      <div className="container">
        <div className="row">
          <iframe
            src="https://www.youtube.com/embed/G-6X8PAQ0UI"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="col">
            <h1 className="title"><FormattedMessage id="about_us"/></h1>
            <p>
              Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est
              hic quod et similique ullam et. Ipsum ipsam temporibus quo ea
              natus enim quae officia nulla. Debitis ea dicta ea eum laboriosam
              quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum
              ipsam temporibus quo ea natus enim quae officia nulla. Debitis ea
              dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et
              similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae
              officia nulla. Debitis ea dicta ea eum laboriosam quis dolore
              repudiandae. Est hic quod et similique ullam et. Ipsum ipsam
              temporibus quo ea natus enim quae officia nulla.
            </p>
            <div className="flex">
              <Animate element={<button className="btn"><FormattedMessage id="contact_us"/></button>}/>
              <Animate element={<button className="btn outline"><FormattedMessage id="play_video"/></button>}/>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="item__servis">
            <div className="flex">
              <img src={deliver} alt="" />
              <div>
                <s><FormattedMessage id="fast_delivery"/></s>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="item__servis">
            <div className="flex">
              <img src={garniture} alt="" />
              <div>
              <s><FormattedMessage id="great_customer"/></s>

              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="item__servis">
            <div className="flex">
              <img src={flower} alt="" />
              <div>
              <s><FormattedMessage id="original_plants"/></s>

              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="item__servis">
            <div className="flex">
              <img src={dollar} alt="" />
              <div>
              <s><FormattedMessage id="affordable_price"/></s>

              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="virtualtour">
      <div className="text__tour">
        <h1>
        360
        </h1>
        <p>
        <FormattedMessage id="virtual_tour"/>
        </p>
        <button className="arrow"></button>
      </div>
    </div>
    <div className="recomend">
      <div className="container">
        <div className="row__recomend">
          <div className="col">
            <Animate element={<h1 className="title">
              <FormattedMessage id="recommendatiion"/>
            </h1>}/>
           <Animate element={ <p>
            <FormattedMessage id="recommend_text"/>

            </p>}/>
          </div>
          <Animate element={<img src={stol} alt="" />}/>
        </div>
      </div>
    </div>
   </>
  );
}

export default AboutUs;
