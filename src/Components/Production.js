import React from "react";
import '../assets/styles/production.css'
import img from '../assets/img/rightimh.png'
import Animate from "./Animate";
import { FormattedMessage } from "react-intl";
function Production() {
  return (
    <div className="production">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">
              <FormattedMessage id="we_have_also"/>
            </h1>
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
              <Animate element={<button className="btn">Catalogue</button>}/>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Production;
