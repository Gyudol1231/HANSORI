import React from "react";
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { Component } from "react/cjs/react.production.min";
import loading from "../asset/pungsa/loading.png";

function createData(content) {
  return { content };
}

class PungsaM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [{ content: "" }],
      modalVisible: false,
      writeContent: "",
      // loginState: false,
      loginState: true,
      isLoading: true,
      clickState: false,
    };
    // this.isLogined();
    this.getContent();
  }

  showContent = () =>
    this.state.article.map((atc) => {
      return (
        <div>
          {atc.content} <br /> <br /> <br />
        </div>
      );
    });

  getContent = () => {
    // fetch("http://localhost/getContentM", {
    fetch("https://api.hansori.net/getContentM", {
      method: "post",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.length; ++i) {
          this.setState({
            article: this.state.article.concat(createData(json[i].content)),
          });
        }
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

  handleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  write = () => {
    if (this.state.clickState) {
      return;
    } else {
      this.setState({
        clickState: true,
      });
      const post = {
        content: this.state.writeContent,
      };

      // fetch("http://localhost/writeM", {
      fetch("https://api.hansori.net/writeM", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      }).then(() => {
        window.location.href = "/pungsaM";
      });
    }
  };

  onChange = (e) => {
    const { value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
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

  render() {
    return (
      <div className="div-pungsam">
        {this.state.isLoading ? (
          <div className="div-pungsam-loading">
            <img className="img-pungsam-loading" src={loading} alt=""></img>
          </div>
        ) : (
          <>
            <div className="div-pungsam-contents">{this.showContent()}</div>
            {this.state.modalVisible && (
              <div
                visible={this.state.modalVisible}
                closable={true}
                maskClosable={true}
                onClose={this.handleModal}
              >
                <div className="div-pungsam-write">
                  <textarea
                    className="div-pungsam-write-content"
                    placeholder="여기에 작성하세요."
                    name="content"
                    value={this.state.writeContent}
                    onChange={this.onChange}
                  />
                  <div className="div-pungsam-buttons">
                    <BsX
                      onClick={this.handleModal}
                      size="25"
                      className="button-pungsam-complete"
                    />
                    {this.state.writeContent != "" && (
                      <BsCheck
                        className="button-pungsam-complete"
                        onClick={this.write}
                        size="25"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
            {!this.state.modalVisible && (
              <div className="div-pungsam-write-button">
                {this.state.loginState ? (
                  <button
                    className="button-pungsam-write"
                    onClick={this.handleModal}
                  >
                    <BsPlus size="5vh" className="button-pungsam-right" />
                  </button>
                ) : (
                  <button
                    className="button-pungsam-write"
                    onClick={() => {
                      window.alert("로그인이 필요한 서비스입니다.");
                      window.location.href = "/profileTemp";
                    }}
                  >
                    <BsPlus size="5vh" className="button-pungsam-right" />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default PungsaM;
