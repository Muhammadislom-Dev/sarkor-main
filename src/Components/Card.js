import React from "react";
import Animate from "./Animate";
import { Context } from "./Wrapper";
import {ApiURL} from './config'
function Card(props) {
  const context = React.useContext(Context);
  const lang = context.locale
  return (
    <Animate
        element={
        <div className="card">
          <img src={ApiURL + 'cover/'+ props?.data?.cover} alt="" />
         {props?.data.color ? <p>Colors:</p> : <p>ㅤㅤ</p>}
          <div className="colors">
            {
                props?.data?.color?.split(",")?.map(
                    item => <button style={{ backgroundColor: item }}></button>
                ) ||  <p>ㅤㅤ</p>
            }
          </div>
          <p>{
            lang === 'uz' ? props?.data?.Title_uz : lang === 'en' ? props?.data?.Title_en : props?.data?.Title_ru
            }</p>
          <br />
          <p>{props?.data?.price}$</p>
        </div>
      }
    />
  );
}

export default Card;
