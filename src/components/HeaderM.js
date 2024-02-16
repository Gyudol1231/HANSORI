import React, { useEffect } from "react";
import logoM from "../asset/header/logo6.png";
import profile from "../asset/header/profile.png";
import dots from "../asset/headerM/ryb4.png";
import menuIcon from "../asset/headerM/ryb5.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const HeaderM = ({ location, match, history }) => {
  const [open, setOpen] = useState(false);
  const [animation1, setAnimation1] = useState("");
  const [animation11, setAnimation11] = useState("openAnimation1");
  const [animation2, setAnimation2] = useState("openAnimation2");

  const onToggle = () => {
    if (open) {
      setAnimation1("openAnimation1");
      setAnimation11("closeAnimation1");

      setAnimation2("closeAnimation2");
      setTimeout(() => {
        setOpen(false);
      }, 300);
    } else {
      setAnimation11("openAnimation1");

      setAnimation2("openAnimation2");
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className="div-header"
        onClick={() => {
          if (open) onToggle();
        }}
      >
        <div className="div-header-wrap">
          <div className="div-header-profile">
            {open ? (
              <IoClose
                size="30"
                onClick={onToggle}
                className={`${animation11}`}
              />
            ) : (
              <img
                onClick={onToggle}
                src={menuIcon}
                style={{ width: "25px" }}
                alt=""
                className={`${animation1}`}
              />
            )}
          </div>
          <div className="div-header-logo">
            <NavLink
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img src={logoM} height="65" alt="" />
            </NavLink>
          </div>
          <div className="div-header-profile">
            <NavLink className="link-header-menu" to="/profileM">
              <div style={{ color: "white" }}>
                {/* {window.localStorage.getItem("imageUrl") == null ? ( */}
                <img
                  style={{ borderRadius: "70%" }}
                  src={profile}
                  height="35"
                  alt=""
                />
                {/* ) : (
                  <img
                    style={{ borderRadius: "70%" }}
                    src={
                      process.env.PUBLIC_URL +
                      window.localStorage.getItem("imageUrl")
                    }
                    height="35"
                    alt=""
                  />
                )} */}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`div-headerm-menu ${animation2}`}
          onClick={() => {
            onToggle();
          }}
        >
          <NavLink
            to="/aboutM"
            onClick={() => {
              onToggle();
            }}
          >
            동아리
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/gallery"
            onClick={() => {
              onToggle();
            }}
          >
            갤러리
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/pungsaM"
            onClick={() => {
              onToggle();
            }}
          >
            풍사
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/pungmulM"
            onClick={() => {
              onToggle();
            }}
          >
            풍물
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/pbti"
            onClick={() => {
              onToggle();
            }}
          >
            풍bti
          </NavLink>
          <br />
          <br />
          <img src={dots} className="img-headerm-dots" alt="" />
        </div>
      )}
    </>
  );
};

export default withRouter(HeaderM);
