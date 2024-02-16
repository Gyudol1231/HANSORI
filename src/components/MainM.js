import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import instruments from "../asset/mainM/instruments.png";

export default class MainM extends Component {
  render() {
    return (
      <>
        <div>
          <ReactFullpage
            scrollOverflow={true}
            render={({ fullpageApi }) => (
              <div id="fullpage-wrapper" style={{ textAlign: "center" }}>
                <div className="section">
                  <div
                    className="div-mainm-section-01"
                    onClick={() => (window.location.href = "/aboutM")}
                  >
                    동&nbsp;국&nbsp;대 <br />
                    공&nbsp;과&nbsp;대 <br />
                    풍&nbsp;물&nbsp;패
                  </div>
                  <div
                    className="div-mainm-arrow"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="section">
                  <div
                    className="div-aboutm-title-01"
                    style={{ color: "#8B837B" }}
                  >
                    풍물 연습
                    <div className="fadein" style={{ fontSize: "15px" }}>
                      <br />
                      시험기간을 제외한 수요일 저녁에 학생회관
                      <br /> 지하 1층에 위치한 연습실에서 연습을 진행합니다.{" "}
                      <br />
                      <br />
                      신입 기수들을 대상으로 선배들이 친절하고 재미있게 <br />
                      악기를 가르쳐주고 있습니다.
                      <br />
                      <br />
                      연습 후엔 재미있는 뒷풀이가 매주 기다리고 있습니다!
                    </div>
                  </div>
                  <div
                    className="div-mainm-arrow"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <span style={{ borderColor: "#8B837B" }}></span>
                    <span style={{ borderColor: "#8B837B" }}></span>
                  </div>
                </div>
                <div className="section">
                  <div
                    className="div-aboutm-title-02"
                    style={{ color: "#B19B83" }}
                  >
                    정기공연 ∙ 연등제 <br /> 해오름제
                    <div
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      <br /> 동국대학교 단과대 풍물패 연합인 단풍연의 소속으로서{" "}
                      <br />
                      매년 연등제와 해오름제를 함께 하고 있어 <br />
                      여러 단과대 친구들과 친해질 수 있고, <br />
                      한소리만의 정기공연을 매년 가을 진행하고 있습니다.
                    </div>
                    <div
                      className="div-mainm-arrow"
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <span style={{ borderColor: "#B19B83" }}></span>
                      <span style={{ borderColor: "#B19B83" }}></span>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div
                    className="div-aboutm-title-01"
                    style={{ color: "#2F4858" }}
                  >
                    스터디
                    <div
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      <br />
                      한소리는 공과대 풍물패이자, 컴퓨터공학과 소모임으로서
                      <br />
                      컴퓨터공학과 학생들을 위한 많은 자료들을 제공하고 있고,{" "}
                      <br />
                      선배들과 동기들간의 스터디가 활발하게 진행되고 있어
                      <br /> 학과 공부에 큰 도움이 됩니다. <br />
                      <br />
                      원흥관 1층에 위치한 풍방에서 동기들과 함께 <br />
                      밤새 과제하고 공부하며 더욱 친해질 수 있습니다.
                    </div>
                  </div>
                  <div
                    className="div-mainm-arrow"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <span style={{ borderColor: "#2F4858" }}></span>
                    <span style={{ borderColor: "#2F4858" }}></span>
                  </div>
                </div>
                <div className="section">
                  <br />
                  <br />
                  <br />
                  <img
                    src={instruments}
                    style={{
                      height: "60vh",
                    }}
                    alt=""
                    onClick={() => {
                      window.location.href = "/pungmulM";
                    }}
                  />
                </div>
              </div>
            )}
          />
        </div>
      </>
    );
  }
}
