import React, { Component } from "react";
import Slider from "react-slick";
import "../asset/css/slick/slick-theme.css";
import "../asset/css/slick/slick.css";
import Header from "../components/Header";

import slide1 from "../asset/main/main3.jpg";
import slide2 from "../asset/main/main2.jpg";
import slide4 from "../asset/main/intro2.jpg";
import slide5 from "../asset/main/intro3.jpg";
import whiteArrow from "../asset/main/arrow.png";

function Arrow(props) {
  const { onClick, image, next } = props;
  console.log("next: " + next);
  return (
    <div
      className={next ? "slide-button-right" : "slide-button-left"}
      onClick={onClick}
    >
      <img className="img-slide-button" src={image} alt="" />
    </div>
  );
}

export default class Main2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "ease-in",
      //   nextArrow: <Arrow image={whiteArrow} next />,
      //   prevArrow: <Arrow image={whiteArrow} next={false} />,
    };

    return (
      <>
        <Header />
        <Slider {...settings} style={{ backgroundColor: "pink" }}>
          <div className="div-main2-slide-section">
            <img src={slide1} className="img-main2-slide" alt="" />
          </div>
          <div className="div-main2-slide-section">
            <img src={slide2} className="img-main2-slide" alt="" />
          </div>

          <div className="div-main2-slide-section">
            <img src={slide4} className="img-main2-slide" alt="" />
          </div>
          <div className="div-main2-slide-section">
            <img src={slide5} className="img-main2-slide" alt="" />
          </div>
        </Slider>
      </>
    );
  }
}
