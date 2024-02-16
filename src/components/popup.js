import React from "react";
import './history.css';
import styles from "./history.module.css";
function Pungsa() {
  return (
    <div className="history">
      <div
      style={{ height: "300px", paddingTop: "100px", backgroundColor: "black" }}>
         <div className="popa">
         <div style={{ color: "white" , fontSize:30}}>앞으로의 한소리 일정은<div></div> 메인페이지 아래 캘린더를 참고해보세요!</div></div>
<div >
<br/>
        <button onClick={() => window.open('/')}>
      <div className="headerleftu">
             <div style={{ color: "white" , fontSize:36}}>
             <div className="pop"> <div className={styles.button}>🐘 바로가기 🐘</div></div></div>
             </div>
      </button>
      </div></div></div>


    
  );
}

export default Pungsa;
