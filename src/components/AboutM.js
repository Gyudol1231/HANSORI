import React from "react";
import { Parallax, Background } from "react-parallax";
import aboutM1 from "../asset/aboutM/aboutM1.png";
import aboutM2 from "../asset/aboutM/aboutM2.png";
import aboutM3 from "../asset/aboutM/aboutM3.png";
import aboutM4 from "../asset/aboutM/aboutM4.png";
import aboutM5 from "../asset/aboutM/aboutM5.png";
import dotsM from "../asset/about/ryb3.png";

export default function AboutM() {
  return (
    <div className="div-about">
      <Parallax
        bgImage={aboutM1}
        bgImageStyle={{
          height: "100vh",
        }}
        strength={300}
        renderLayer={(percentage) => (
          <div>
            <div className="div-about-layer">
              <div className="div-aboutm-title div-aboutm-title-01">
                풍물 연습
                <div className="fadein" style={{ fontSize: "15px" }}>
                  <br />
                  시험기간을 제외한 수요일 저녁에 학생회관
                  <br /> 지하 1층에 위치한 연습실에서 연습을 진행합니다. <br />
                  <br />
                  신입 기수들을 대상으로 선배들이 친절하고 재미있게 <br />
                  악기를 가르쳐주고 있습니다.
                  <br />
                  <br />
                  연습 후엔 재미있는 뒷풀이가 매주 기다리고 있습니다!
                </div>
              </div>
            </div>
          </div>
        )}
      ></Parallax>
      <img className="dotsm" src={dotsM} alt="" />
      <Parallax
        bgImage={aboutM2}
        bgImageStyle={{
          height: "100vh",
        }}
        blur={{ min: -2, max: 5 }}
        strength={300}
        renderLayer={(percentage) => (
          <div>
            <div className="div-about-layer">
              <div className="div-aboutm-title div-aboutm-title-02">
                <div>
                  <p>
                    정기공연 ∙ 연등제 <br /> 해오름제
                  </p>
                  <div
                    className={percentage >= 1 ? "fadein" : "hidden"}
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
                </div>
              </div>
            </div>
          </div>
        )}
      ></Parallax>
      <img className="dotsm" src={dotsM} alt="" />
      <Parallax
        bgImage={aboutM3}
        bgImageStyle={{
          height: "100vh",
        }}
        strength={300}
        renderLayer={(percentage) => (
          <div>
            <div className="div-about-layer">
              <div className="div-aboutm-title div-aboutm-title-01">
                스터디
                <div
                  className={percentage >= 1 ? "fadein" : "hidden"}
                  style={{
                    fontSize: "15px",
                  }}
                >
                  <br />
                  한소리는 공과대 풍물패이자, 컴퓨터공학과 소모임으로서
                  <br />
                  컴퓨터공학과 학생들을 위한 많은 자료들을 제공하고 있고, <br />
                  선배들과 동기들간의 스터디가 활발하게 진행되고 있어
                  <br /> 학과 공부에 큰 도움이 됩니다. <br />
                  <br />
                  원흥관 1층에 위치한 풍방에서 동기들과 함께 <br />
                  밤새 과제하고 공부하며 더욱 친해질 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        )}
      ></Parallax>
      <img className="dotsm" src={dotsM} alt="" />
      <Parallax strength={300}>
        <Background className="custom-bg">
          <img src={aboutM4} alt="" />
        </Background>
        <div>
          <div className="div-aboutm-contents-01">
            <br />
            <br />
            + MT, 합숙, 소풍, 여행, 번개 +
            <br />
            <br />
            <br />
          </div>
        </div>
      </Parallax>
      <img className="dotsm" src={dotsM} alt="" />
      <Parallax
        bgImage={aboutM5}
        bgImageStyle={{
          height: "100vh",
        }}
        strength={300}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 236, 204, ${percentage})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 400,
                height: percentage * 400,
              }}
            />
          </div>
        )}
      >
        <div className="div-about-layer">
          <div className="div-about-contents-02">
            <div
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/hansori_dongguk/")
              }
            >
              Instagram
              <br />
              <br />
              @hansori_dongguk
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
