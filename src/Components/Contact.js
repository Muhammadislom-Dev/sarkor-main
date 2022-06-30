import React from "react";
import { FormattedMessage } from "react-intl";
import "../assets/styles/contact.css";
import Animate from "./Animate";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <Animate element={<h1 className="title"><FormattedMessage id="any_questions"/></h1>} />
            <Animate
              element={
                <p>
                  <FormattedMessage id="questions_text"/>
                </p>
              }
            />
          </div>
          <form>
            <div className="col">
              <div className="flex">
                <div className="item__input">
                  <label htmlFor="name"><FormattedMessage id="name"/></label>
                  <Animate
                    element={
                      <input type="text" placeholder="Abdulhamid" required />
                    }
                  />
                </div>
                <div className="item__input">
                  <label htmlFor="email"><FormattedMessage id="email"/></label>
                  <Animate
                    element={
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        required
                      />
                    }
                  />
                </div>
              </div>
              <br />
              <div className="phone" />

              <div className="item__input">
                <label htmlFor="email"><FormattedMessage id="question"/></label>
                <Animate
                  element={
                    <textarea
                      placeholder="Leave your question here"
                      id=""
                      cols="30"
                      rows="10"
                    />
                  }
                />
              </div>
              <Animate element={<button><FormattedMessage id="submit"/></button>} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
