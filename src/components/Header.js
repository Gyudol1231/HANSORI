import React, { useState } from "react";
import logo from "../asset/header/logo6.png";
import profile from "../asset/header/profile.png";
import { NavLink, withRouter } from "react-router-dom";
import "../asset/css/Header.css";

const Header = ({ location, match, history }) => {
  const [scrollLocation, setLocation] = useState(0);

  window.addEventListener("scroll", () => {
    let currentLocation = document.documentElement.scrollTop;
    setLocation(currentLocation);
  });

  if (scrollLocation !== 0) return null;

  const getTodayMonth = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1);
    // const day = currentDate.getDate().toString().padStart(2, '0');

    return year * 100 + month;
  }

  return (
    <>
      <div className="div-header">
        <div className="div-header-wrap">
          <div className="div-header-logo">
            <NavLink
              className="link-header-menu"
              to="/"
              onClick={() => {
                if (location.pathname === "/") window.location.reload();
              }}
            >
              <img
                src={logo}
                height="60"
                alt=""
                onClick={() => {
                  window.localStorage.removeItem("changeColor");
                }}
              />
            </NavLink>
          </div>
          <div className="div-header-menu">
            <NavLink className="link-header-menu" to="/about">
              동아리
            </NavLink>
            <NavLink className="link-header-menu" to="/gallery">
              갤러리
            </NavLink>
            <NavLink className="link-header-menu" to={`/pungsa/${getTodayMonth()}`}>
              풍사
            </NavLink>
            <NavLink className="link-header-menu" to="/pungmul">
              <div
                onClick={() => {
                  window.localStorage.removeItem("changeColor");
                }}
              >
                풍물
              </div>
            </NavLink>
          </div>
          <div className="div-header-profile">
            <NavLink className="link-header-menu" to="/profile">
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
    </>
  );
};

export default withRouter(Header);
