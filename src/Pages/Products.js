import React from "react";
import Card from "../Components/Card";
import Contact from "../Components/Contact";
import stol from "../assets/img/stol.png";
import { Link } from "react-router-dom";
import ScrollTop from "../Components/ScrollTop";
import Animate from "../Components/Animate";
import {ApiURL} from '../Components/config'

function Products() {
  const [active, setactive] = React.useState("office");
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch(ApiURL + 'api/all/product')
      .then(response => response.json())
      .then(json => setdata(json))
  }, [])
  
  return (
    <div className="products">
      <ScrollTop />
      <div className="container margin__bottom">
        <div className="btns__row">
          <button
            onClick={() => setactive("office")}
            className={`btn ${active === "office" || "outline"}`}
          >
            OFFICE
          </button>
          <button
            onClick={() => setactive("home")}
            className={`btn ${active === "home" || "outline"}`}
          >
            HOME
          </button>
          <button
            onClick={() => setactive("hotel")}
            className={`btn ${active === "hotel" || "outline"}`}
          >
            HOTEL
          </button>
          <button
            onClick={() => setactive("accessories")}
            className={`btn ${active === "accessories" || "outline"}`}
          >
            ACCESSORIES
          </button>
        </div>
        <h1 className="title">Our products for your houses</h1>
        <div className="body__products">
          {
            data?.map(item => 
            <Link to={'/product/'+item?.id}>
              <div className="product__slide">
              <Card data={item}/>
            </div> 
            </Link> 
            )
          }
        </div>
       <div className="center">
       <Animate element={<button className="btn outline">More products</button>}/>
       </div>
      </div>

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

export default Products;
