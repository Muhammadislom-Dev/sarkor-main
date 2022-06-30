import React from "react";
import "../assets/styles/aboutus.css";
import deliver from "../assets/img/deliver.svg";
import dollar from "../assets/img/dollar.svg";
import flower from "../assets/img/flower.svg";
import garniture from "../assets/img/garniture.svg";
import Contact from "../Components/Contact";
import ScrollTop from "../Components/ScrollTop";
import { FormattedMessage } from "react-intl";
import Animate from "../Components/Animate";
function About() {
  const [data, setdata] = React.useState([1,2,3,4,5,6,7,8,9,0])
  const [current, setcurrent] = React.useState(3)
  return (
    <div>
      <ScrollTop />
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
              <Animate
                element={
                  <p>
                    Debitis ea dicta ea eum laboriosam quis dolore repudiandae.
                    Est hic quod et similique ullam et. Ipsum ipsam temporibus
                    quo ea natus enim quae officia nulla. Debitis ea dicta ea
                    eum laboriosam quis dolore repudiandae. Est hic quod et
                    similique ullam et. Ipsum ipsam temporibus quo ea natus enim
                    quae officia nulla. Debitis ea dicta ea eum laboriosam quis
                    dolore repudiandae. Est hic quod et similique ullam et.
                    Ipsum ipsam temporibus quo ea natus enim quae officia nulla.
                    Debitis ea dicta ea eum laboriosam quis dolore repudiandae.
                    Est hic quod et similique ullam et. Ipsum ipsam temporibus
                    quo ea natus enim quae officia nulla.
                  </p>
                }
              />
              <div className="flex">
                <Animate
                  element={<button className="btn"><FormattedMessage id="contact_us"/></button>}
                />
                <Animate
                  element={
                    <button className="btn outline"><FormattedMessage id="play_video"/></button>
                  }
                />
              </div>
            </div>
          </div>
          <div className="services">
            <div className="item__servis">
              <div className="flex">
                <img src={deliver} alt="" />
                <div>
                  <s>Fast </s>
                  <s>Delivery</s>
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
                  <s>Great Customer </s>
                  <s>Service</s>
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
                  <s>Original </s>
                  <s>Plants</s>
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
                  <s>Affordable </s>
                  <s>Price</s>
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
      <div className="container">
        <div className="news">
          <h1 className="title">Some of our awesome projects</h1>

          <div className="news__body">
            {data.slice(0,current).map(item =>
              <div className="news__item">
                <img
                  src="https://i.pinimg.com/originals/59/85/50/5985503243ff3747397011d3256f2409.jpg"
                  alt=""
                />
                <div className="news__text">
                  <div className="hashtag">#bedroom</div>
                  <h3>Interior design project</h3>
                  <a href="#">View Project →</a>
                </div>
              </div>
            )}
          </div>
          <div className="center">
            <button className="btn outline" onClick={()=>setcurrent(current + 3)}>VIEW ALL</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="ribbon">
          <div className="container">
            <div className="row">
              {[1, 2, 3, 4, 5].map(item =>
                <div className="item__ribbon">
                  <small>April 16, 2021</small>
                  <p>
                    Design tips for designers, that cover everything you need
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default About;
