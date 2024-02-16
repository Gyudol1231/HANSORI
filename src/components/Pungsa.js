import e from "cors";
import React from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { Component } from "react/cjs/react.production.min";
import loading from "../asset/pungsa/loading.png";

import arrow from "../asset/main/arrow.png";

function createData(content, locX, locY) {
  return { content, locX, locY };
}

class Pungsa extends Component {
  constructor(props) {
    super(props);
    this.Board = React.createRef();
    this.state = {
      article: [{ content: "", locX: 0, locY: 0 }],
      writeContent: "",
      writeLoc: { locX: 0, locY: 0 },
      modalDisplay: "none",
      // loginState: false,
      loginState: true,
      isLoading: true,
    };
    // this.isLogined();
  }
  componentDidMount() {
    this.isValidPage();
    this.getContent();
  }

  showContent = () =>
    this.state.article.map((atc) => {
      return (
        <div>
          <div
            className="div-pungsa-contents"
            style={{
              left: atc.locX,
              top: atc.locY + 89, // 헤더 높이 고려
            }}
          >
            <pre>{atc.content}</pre>
          </div>
        </div>
      );
    });

  getContent = () => {
    const post = {
      content: this.props.match.params.pageNumber,
    };

    // fetch("http://localhost:8080/getContent", {
    fetch("https://api.hansori.net/getContent", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
        .then((res) => res.json())
        .then((json) => {
          for (let i = 0; i < json.length; ++i) {
            this.setState({
              article: this.state.article.concat(
                  createData(json[i].content, json[i].locx, json[i].locy)
              ),
            });
          }
          // console.log(this.state.article);
        })
        .then(() => {
          this.setState({
            isLoading: false,
          });
        });
  };

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      writeContent: value,
    });
  };

  isLogined = () => {
    var sessionID = window.localStorage.getItem("sessionID");
    if (sessionID != null) {
      const post = {
        content: sessionID,
      };

      fetch("https://hansori.net/check", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.isLogined) {
            this.setState({
              loginState: true,
            });
          } else {
            window.localStorage.clear();
          }
        });
    }
  };

  modalClose = (e) => {
    this.setState({
      writeContent: "",
      modalDisplay: "none",
    });
  };

  write = () => {
    const post = {
      content: this.state.writeContent,
      locX: this.state.writeLoc.locX,
      locY: this.state.writeLoc.locY,
      pageNum: this.props.match.params.pageNumber,
    };

    // fetch("http://localhost/write", {
    fetch("https://api.hansori.net/write", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      window.location.reload();
    });
  };

  // 풍사 페이지 제어(날짜 형식)
  getTodayMonth = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1);

    return year * 100 + month;
  }
  isValidPage = () => {
    const curPageNum = Number(this.props.match.params.pageNumber);
    const curPageMonth = curPageNum % 100;
    if (curPageNum > 999912 || curPageNum < 100001) {
      window.location.replace(`/pungsa/${this.getTodayMonth()}`);
      window.alert("잘못된 접근입니다. 연도와 날짜 형식을 정확히 맞춰주세요!\n\nex) 2001년 12월: 200112");
    } else if (curPageMonth > 12 || curPageMonth < 1) {
      window.alert("잘못된 접근입니다. 연도와 날짜 형식을 정확히 맞춰주세요!\n\nex) 2001년 12월: 200112");
      window.location.replace(`/pungsa/${this.getTodayMonth()}`);
    }
  }
  loadPage = (offset) => {
    const nextPageNum = Number(this.props.match.params.pageNumber) + offset;
    const nextPageMonth = nextPageNum % 100;
    if (nextPageNum > 999912 || nextPageNum < 100001) {
      window.alert("이동할 수 없습니다.");
    } else if (nextPageMonth === 0) {
      window.location.replace(
          `/pungsa/${nextPageNum - 88}`
      );
    } else if (nextPageMonth === 13) {
      window.location.replace(
          `/pungsa/${nextPageNum + 88}`
      );
    }
    else {
      window.location.replace(
          `/pungsa/${nextPageNum}`
      );
    }
  }

  render() {
    return (
      <>
        {/* ----- pungsa-body: 작성된 글자가 보이는 공간 -----

      * 배경색은 베이지색
      * touchpad크기는 이 구간에 맞춰 설정했다.        */}
        {this.state.isLoading ? (
          <div className="div-pungsam-loading">
            <img className="img-pungsam-loading" src={loading} alt=""></img>
          </div>
        ) : (
          <div
            className="div-pungsa-body"
            ref={this.Board}
          >
            {/* ----- touchpad: 글자 입력 위치정보를 받는 공간 ----------------------

          * 클릭하면 해당 위치에서부터 글 작성이 가능하다.
          * 글자가 베이지 색 영역을 삐져나오는 문제가 발생해 임시방편으로 만든 div 
          * touchpad는 투명하다, 그래서 커서의 변화로 영역을 구분할 수 있게 만듦   */}
            <div
              className="div-pungsa-touchpad"
              onClick={(e) => {
                // 좌우 margin은 auto이므로 클릭 할때마다 뷰포트 기준 위치를 구한다.
                let left_ = Math.round(
                  this.Board.current.getBoundingClientRect().left
                );
                console.log(this.Board.current.getBoundingClientRect());
                e.preventDefault();
                this.setState({
                  modalDisplay: "block",
                  writeLoc: { locX: e.pageX - left_, locY: e.pageY - 89 }, // 89: 헤더를 위한 mraginTop값
                });
              }}
            >
              <div
                className="div-pungsa-write-wrapper"
                style={{
                  display: this.state.modalDisplay,
                  left: this.state.writeLoc.locX,
                  top: this.state.writeLoc.locY,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <textarea
                  placeholder={
                    this.state.loginState
                      ? "여기에 작성하세요."
                      : "로그인 후 이용해주세요."
                  }
                  name="content"
                  value={this.state.writeContent}
                  onChange={this.onChange}
                />

                <div className="div-pungsa-write-buttons-wrapper">
                  <BsX
                    className="div-pungsa-write-close"
                    onClick={this.modalClose}
                    size="2.5vmin"
                  />
                  {this.state.writeContent != "" &&
                    (this.state.loginState ? (
                      <BsCheck
                        className="div-pungsa-write-submit"
                        onClick={this.write}
                        size="2.5vmin"
                      />
                    ) : (
                      <BsCheck
                        className="div-pungsa-write-submit"
                        onClick={() => {
                          window.alert("로그인이 필요한 서비스입니다.");
                          window.location.href = "/profileTemp";
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>

            <img
              className="div-pungsa-arrow-left"
              src={arrow}
              onClick={(e) => {this.loadPage(-1)}}
              alt=""
            />
            <img
              className="div-pungsa-arrow-right"
              src={arrow}
              onClick={(e) => {this.loadPage(1)}}
              alt=""
            />

            {
              // db에 저장되어 있는 콘텐츠를 낙서장에 보여준다.
              this.showContent()
            }
          </div>
        )}
      </>
    );
  }
}

export default Pungsa;
