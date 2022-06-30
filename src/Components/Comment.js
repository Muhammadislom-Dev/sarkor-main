import React from "react";
import "../assets/styles/comment.css";
import Star from "../assets/img/start.svg";
import Slider from "react-slick";
import Animate from "./Animate";
import { FormattedMessage } from "react-intl";
function Comment() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const data = [
    {
      id: 1,
      status: 3,
      name: "Muzaffar Alimov",
      title: "Welcome to home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id"
    },
    {
      id: 2,
      status: 4,
      name: "Muzaffar Alimov",
      title: "Welcome to home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id"
    },
    {
      id: 3,
      status: 2,
      name: "Muzaffar Alimov",
      title: "Welcome to home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id"
    },
    {
      id: 4,
      status: 5,
      name: "Muzaffar Alimov",
      title: "Welcome to home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id"
    },
    {
      id: 5,
      status: 4,
      name: "Muzaffar Alimov",
      title: "Welcome to home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id"
    }
  ];
  return (
    <div className="comment">
      <div className="container">
        <h1 className="title" style={{ width: "30%" }}>
          <FormattedMessage id="what_client"/>
        </h1>
      </div>
      <div className="comment__slider">
        <Slider {...settings}>
          {data.map(item =>
            <div>
              <Animate
                element={
                  <div className="comment__card">
                    <div className="star__row">
                      {[1, 2, 3, 4, 5].slice(0, item.status).map(item => <img src={Star} alt="" />)}
                    </div>
                    <h1>
                      {item.title}
                    </h1>
                    <p>
                      {item.description}
                    </p>
                    <p className="name">{item.name}</p>
                  </div>
                }
              />
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Comment;
