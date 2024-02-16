import React, { useState, useEffect } from "react";

export default function Pbti() {
  const [page, setPage] = useState(1); // 페이지 단계

  const [qNum, setQNum] = useState(1); // 질문 번호

  const [metal, setMetal] = useState(0); // 쇠
  const [jing, setJing] = useState(0); // 징
  const [janggu, setJanggu] = useState(0); // 장구
  const [drum, setDrum] = useState(0); // 북
  const [sogo, setSogo] = useState(0); // 소고
  const [dancer, setDancer] = useState(0); // 채상
  const [poor, setPoor] = useState(0); // 잡색

  const [mainInst, setMainInst] = useState("그냥 장구"); // 가장 잘 어울리는 악기
  const [subInst, setSubInst] = useState("그냥 쇠"); // 두번째 악기

  const [animation11, setAnimation11] = useState(false);
  const [animation12, setAnimation12] = useState(false);
  const [animation13, setAnimation13] = useState(false);

  const [animation23, setAnimation23] = useState(false);

  useEffect(() => {
    if (page === 1) {
      setAnimation11(true);
      setInterval(() => {
        setAnimation12(true);
      }, 1000);
      setInterval(() => {
        setAnimation13(true);
      }, 2500);
    }
    if (page === 3) {
      setInterval(() => {
        setAnimation23(true);
      }, 1500);
    }
  }, [page]);

  const first = (
    <div className="div-pbti-firstBody">
      <h1 className="pbti-fadeIn" style={{ opacity: animation11 ? 1 : 0 }}>
        풍물 mbti
      </h1>
      <p className="pbti-fadeIn" style={{ opacity: animation12 ? 1 : 0 }}>
        <h4>
          간단한 몇가지 질문들에 답변한 후,
          <br />
          나에게 맞는 치배를 확인해봐요!
        </h4>
        <br />
        <h5>* 치배 종류: 쇠, 장구, 북, 징, 소고, 잡색, 채상</h5>
      </p>
      <div
        className="div-pbti-start pbti-moveUp"
        style={{
          opacity: animation13 ? 1 : 0,
          transform: animation13 ? "translateY(0)" : "translateY(100%)",
        }}
        onClick={() => setPage(2)}
      >
        <b>시작하기</b>
      </div>
    </div>
  );

  const score = (arr) => {
    arr.map((inst) => {
      switch (inst) {
        case "metal":
          setMetal((prev) => prev + 1);
          break;
        case "jing":
          setJing((prev) => prev + 1);
          break;
        case "janggu":
          setJanggu((prev) => prev + 1);
          break;
        case "drum":
          setDrum((prev) => prev + 1);
          break;
        case "sogo":
          setSogo((prev) => prev + 1);
          break;
        case "dancer":
          setDancer((prev) => prev + 1);
          break;
        case "poor":
          setPoor((prev) => prev + 1);
          break;
        default:
      }
    });
  };
  const question = (number, question, plus, minus) => (
    <div className="div-pbti-questionsBody">
      <h3>
        Q{number}. {question}
      </h3>
      <div className="div-pbti-buttons">
        <div
          className="div-pbti-button"
          onClick={() => {
            score(plus);
            setQNum((prev) => prev + 1);
          }}
        >
          <b>O</b>
        </div>
        <div
          className="div-pbti-button"
          onClick={() => {
            score(minus);
            setQNum((prev) => prev + 1);
          }}
        >
          <b>X</b>
        </div>
      </div>
    </div>
  );
  const questions = (
    <>
      {qNum === 1 &&
        question(
          1,
          "나는 주목 받는것을 즐기는 편이다.",
          [
            "metal",
            "metal",
            "dancer",
            "dancer",
            "dancer",
            "poor",
            "poor",
            "poor",
          ],
          ["sogo", "sogo", "janggu", "drum", "drum", "drum"]
        )}
      {qNum === 2 &&
        question(
          2,
          "나는 사람들을 이끄는 것을 좋아한다.",
          ["metal", "metal", "metal", "poor", "poor", "janggu"],
          ["jing", "janggu", "drum", "sogo"]
        )}
      {qNum === 3 &&
        question(
          3,
          "나는 멀티태스킹이 잘 되는 편이다.",
          ["dancer", "dancer", "sogo", "janggu"],
          ["jing", "jing", "drum", "drum"]
        )}
      {qNum === 4 &&
        question(
          4,
          "나는 박자 감각이 탁월한 편이다.",
          ["metal", "metal", "janggu", "janggu", "drum", "dru"],
          ["jing", "poor"]
        )}
      {qNum === 5 &&
        question(
          5,
          "나는 운동이나 몸을 쓰는 활동을 즐겨한다.",
          ["jing", "jing", "jing", "janggu", "janggu", "drum"],
          ["sogo", "poor", "metal"]
        )}
      {qNum === 6 &&
        question(
          6,
          "내가 몸치라고 생각 들 때가 있다.",
          ["metal", "jing", "drum"],
          ["dancer", "dancer", "dancer", "sogo", "sogo", "janggu"]
        )}
      {qNum === 7 &&
        question(
          7,
          "나는 센스가 좋은 편이라는 말을 종종 듣는다.",
          ["metal", "janggu", "sogo", "poor", "poor", "poor"],
          ["drum", "drum", "jing", "jing"]
        )}
    </>
  );
  useEffect(() => {
    console.log("점수-------------------------------\n\n");
    console.log("장구: " + janggu);
    console.log("북: " + drum);
    console.log("쇠: " + metal);
    console.log("소고: " + sogo);
    console.log("징: " + jing);
    console.log("잡색: " + poor);
    console.log("채상: " + dancer);
    if (qNum > 7) {
      const arr = [
        { name: "장구", score: janggu },
        { name: "북", score: drum },
        { name: "쇠", score: metal },
        { name: "소고", score: sogo },
        { name: "징", score: jing },
        { name: "잡색", score: poor },
        { name: "채상", score: dancer },
      ];
      arr.sort(function (a, b) {
        return b.score - a.score;
      });
      console.log(arr[0].name, arr[1].name);
      setMainInst(arr[0].name);
      setSubInst(arr[1].name);
      setPage(3);
    }
  }, [qNum]);

  const result = (
    <div className="div-pbti-resultBody">
      <h3>
        가장 잘 어울리는 치배는 {mainInst}입니다!
      </h3>
      <br />
      <h3>
        두번째로 잘 어울리는 치배는{subInst}입니다!
      </h3>
      <br />
      <br />
      <br />
      <div
        onClick={() => {
          window.location.reload();
        }}
      >
        <h2
          className="pbti-moveUp"
          style={{
            opacity: animation23 ? 1 : 0,
            transform: animation23 ? "translateY(0)" : "translateY(100%)",
          }}
        >
          처음으로
        </h2>
      </div>
    </div>
  );

  return (
    <>
      {page === 1 && first}
      {page === 2 && questions}
      {page === 3 && result}
    </>
  );
}
