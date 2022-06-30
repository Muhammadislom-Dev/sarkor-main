import React, { useState, useEffect } from "react";
import AboutUs from "../Components/AboutUs";
import Comment from "../Components/Comment";
import { data } from "../Components/config";
import Contact from "../Components/Contact";
import Furniture from "../Components/Furniture";
import HeaderSlide from "../Components/HeaderSlide";
import ProductFamous from "../Components/ProductFamous";
import Production from "../Components/Production";
import ScrollTop from "../Components/ScrollTop";
import { Context } from "../Components/Wrapper";

function Home() {
  const context = React.useContext(Context);


  return (
    <div>
      <ScrollTop />
      <HeaderSlide lang={context.locale}/>
      <ProductFamous data={data} />
      <Furniture lang={context.locale}/>
      <AboutUs />
      <Production />
      <ProductFamous data={data} />
      <Comment />
      <Contact />
    </div>
  );
}

export default Home;
