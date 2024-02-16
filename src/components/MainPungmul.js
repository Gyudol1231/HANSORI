import React from "react";
import DelayLink from "react-delay-link";
import { NavLink } from "react-router-dom";

import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";
import instEnd from "../asset/instruments/instEnd.png";
import mix from "../asset/mainPungmulM/mix.mp3";

const guyong = new Audio(mix);

function changeColor() {
  if (!window.sessionStorage.getItem("headerColor")) getRandomColor();
  else window.sessionStorage.removeItem("headerColor");
  window.location.reload();
}

function getRandomColor() {
  console.log("random!");
  window.sessionStorage.setItem(
    "headerColor",
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
}

function MainPungmul({ scale }) {
  return (
    <>
      <div className="div-mainpungmul-contents">
        <div className="div-mainpungmul-instruments">
          {/* <DelayLink delay={300} to="/pungmul/kkwaenggwari"> */}
          <img
            className="img-pungmul-inst"
            src={inst1}
            alt=""
            style={{ width: `${37 * scale}px`, paddingBottom: "10px" }}
            onClick={() => {
              changeColor();
            }}
          />
          {/* <DelayLink delay={300} to="/pungmul/janggu"> */}
          <img
            className="img-pungmul-inst"
            src={inst2}
            alt=""
            style={{ width: `${90 * scale}px`, paddingBottom: "10px" }}
            onClick={() => {
              changeColor();
            }}
          />
          {/* <DelayLink delay={300} to="/pungmul/drum"> */}
          <img
            className="img-pungmul-inst"
            src={inst3}
            alt=""
            style={{ width: `${69 * scale}px`, paddingBottom: "10px" }}
            onClick={() => {
              changeColor();
            }}
          />
          {/* <DelayLink delay={300} to="/pungmul/jing"> */}
          <img
            className="img-pungmul-inst"
            src={inst4}
            alt=""
            style={{ width: `${77 * scale}px`, paddingBottom: "10px" }}
            onClick={() => {
              changeColor();
            }}
          />
          {/* <DelayLink delay={300} to="/pungmul/sogo"> */}
          <img
            className="img-pungmul-inst"
            src={inst5}
            alt=""
            style={{ width: `${51 * scale}px`, paddingBottom: "10px" }}
            onClick={() => {
              changeColor();
            }}
          />
          <NavLink to="/pungmul">
            <img
              className="img-mainpungmul-changecolor"
              src={instEnd}
              alt=""
              style={{ width: `${3 * scale}px`, paddingBottom: "10px" }}
              onClick={() => {
                guyong.play();
              }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

MainPungmul.defaultProps = {
  scale: 1,
};

export default MainPungmul;
