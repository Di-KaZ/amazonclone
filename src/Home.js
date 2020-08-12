import React from "react";
import stylesHome from "./Home.module.scss";
import Product from "./Product";

const Home = () => {
  return (
    <div className={stylesHome.home}>
      <img
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
      />
      <div className={stylesHome.row}>
        <Product
          id="123412341"
          title="Ye ye Yo"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSam6QDzPzrq0K2qEOQFO-kEb0GfWEJ8GeGuwIEb5uQxtILB_eKExA5qnoy8Q&usqp=CAE"
        ></Product>
        <Product
          id="123412341"
          title="Ye ye Yo"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSam6QDzPzrq0K2qEOQFO-kEb0GfWEJ8GeGuwIEb5uQxtILB_eKExA5qnoy8Q&usqp=CAE"
        ></Product>
      </div>
    </div>
  );
};

export default Home;
