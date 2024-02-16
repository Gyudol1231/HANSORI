import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../components/Header";
import MainPungmul from "./MainPungmul";
import GoogleCalendar from "./GoogleCalendar";
import mainImg3 from "../asset/main/main1.jpg";
import mainImg2 from "../asset/main/main2.jpg";
import mainImg1 from "../asset/main/main3.jpg";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: mainImg1,
      bgColor: "white",
    };
  }

  changeImg() {
    switch (this.state.img) {
      case mainImg1:
        this.setState({
          img: mainImg2,
        });
        break;
      case mainImg2:
        this.setState({
          img: mainImg3,
        });
        break;
      default:
        this.setState({
          img: mainImg1,
        });
    }
  }

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ fullpageApi }) => (
          <div id="fullpage-wrapper">
            <Header />
            <div
              className="section"
              style={{
                backgroundColor: window.sessionStorage.getItem("headerColor"),
              }}
            >
              <div className="div-main-section">
                <div className="div-main-01">
                  <img
                    src={this.state.img}
                    alt=""
                    className="img-main"
                    onClick={() => this.changeImg()}
                    style={{
                      backgroundColor:
                        window.sessionStorage.getItem("headerColor"),
                    }}
                  />
                  <div className="div-main-02">동국대학교 공과대 풍물패</div>
                </div>
                <div className="div-main-03">
                  <MainPungmul />
                </div>
                <div
                  className="div-main-arrow"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="section">
              <GoogleCalendar />
            </div>
          </div>
        )}
      />
    );
  }
}
