import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {ApiURL} from './config'

function Furniture({lang}) {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch(ApiURL + "api/v1/category/info")
      .then(response => response.json())
      .then(json => setdata(json))
      .then(json => console.log(json));
  }, []);
  return (
    <div className="furniture">
      <div className="container">
        <h1 className="title"><FormattedMessage id="furniture_categories"/></h1>
        <div className="row">
         {
             data?.map(
                item =>  
                  <Link to={'/products/'+ item?.id}>
                    <div key={item?.id} className="item__furniture">
                      <img
                        src={ApiURL + 'cover/'+item?.cover}
                        alt=""
                      />
                      <p>{
                        lang === 'uz' ? item?.category_uz : lang === 'en' ? item?.category_en : item?.category_ru
                        }</p> 
                    </div>
                  </Link>
                )
         }
        </div>
      </div>
    </div>
  );
}

export default Furniture;
