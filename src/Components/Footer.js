import React from "react";
import "../assets/styles/footer.css";
import img from "../assets/img/abbacoding.svg";
import Animate from "./Animate";
import { FormattedMessage } from "react-intl";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <Animate
            element={
              <div className="col">
                <h1>SarkorMebel</h1>
                <p>
                  Welcome at Template Resource. This template is packed with
                  useful features to built out your own resource website.
                </p>
              </div>
            }
          />
          <div className="flex">
            <Animate
              element={
                <div className="col">
                  <h2>
                    <FormattedMessage id="about_us" />
                  </h2>
                  <a href="#">
                    <FormattedMessage id="about_us" />
                  </a>
                  <a href="#">
                    <FormattedMessage id="our_team" />
                  </a>
                  <a href="#">
                  <FormattedMessage id="frequent" />
                  </a>
                  <a href="#">
                    <FormattedMessage id="contact_us" />
                  </a>
                </div>
              }
            />

            <Animate
              element={
                <div className="col">
                  <h2><FormattedMessage id="information" /></h2>
                  <a href="#"><FormattedMessage id="blog" /></a>
                  <a href="#"><FormattedMessage id="pricing" /></a>
                  <a href="#"><FormattedMessage id="resources" /></a>
                  <a href="#"><FormattedMessage id="frequent" /></a>
                </div>
              }
            />

            <Animate
              element={
                <div className="col">
                  <h2><FormattedMessage id="contact" /></h2>
                  <a href="#"><FormattedMessage id="email" /></a>
                  <a href="#"><FormattedMessage id="contact" /></a>
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                </div>
              }
            />
          </div>
        </div>
      </footer>
      <div className="container">
        <div className="footer__bottom">
          <Animate element={<p><FormattedMessage id="all_reserved" />.</p>} />
          <Animate
            element={
              <div className="flex">
                <p><FormattedMessage id="developed_by" /></p>
                <img src={img} alt="" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
