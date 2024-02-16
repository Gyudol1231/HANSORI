import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FaEyeSlash, FaEye } from "react-icons/fa";

class ProfileM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "name",
      email: "example@gmail.com",
      imageUrl: "",
      signUp: false,
      signUping: false,
      visible: "password",
      pbpwInput: "",
      loginState: false,
    };
    this.isLogined();
  }

  responseGoogleSignIn = (res) => {
    const post = {
      content: res.profileObj.email,
    };

    fetch("https://hansori.net/signIn", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.SUCCESS) {
          this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
          });

          this.setSession();
        } else {
          this.setState({ signUp: true });
          alert("등록된 회원이 아닙니다. 회원가입을 진행해주세요.");
        }
      });
  };

  setSession = () => {
    fetch("https://hansori.net/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        window.localStorage.setItem("sessionID", data);
        window.localStorage.setItem("imageUrl", this.state.imageUrl);
        window.location.reload();
      });
  };

  responseGoogleSignUp = (res) => {
    const post = {
      content: res.profileObj.email,
    };

    fetch("https://hansori.net/signUp", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.SUCCESS) {
          alert("이미 등록된 회원입니다.");
          this.setState({ signUp: false });
        } else {
          this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
            signUping: true,
          });
        }
      });
  };

  responseFail = (err) => {
    console.error(err);
  };

  onLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  onChange = (e) => {
    this.setState({
      pbpwInput: e.target.value,
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
            window.location.reload();
          }
        });
    } else {
      if (window.localStorage.getItem("imageUrl") != null) {
        window.localStorage.clear();
        window.location.reload();
      }
    }
  };

  render() {
    return (
      <div className="div-profile-contents">
        <div className="div-profilem">
          {this.state.loginState ? (
            <div className="div-profilem-login">
              <GoogleLogout
                clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                buttonText="로그아웃"
                onLogoutSuccess={this.onLogout}
              ></GoogleLogout>
            </div>
          ) : !this.state.signUp ? (
            <div
              style={{
                fontSize: "30px",
              }}
            >
              환영합니다.
              <div className="div-profilem-login">
                <GoogleLogin
                  clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                  buttonText="Google로 로그인"
                  onSuccess={this.responseGoogleSignIn}
                  onFailure={this.responseFail}
                />
              </div>
              <div className="div-profilem-buttons div-profilem-buttons-01">
                <div
                  style={{
                    paddingRight: "1vw",
                  }}
                >
                  계정이 없으신가요?
                </div>
                <button
                  className="button-profile-login"
                  onClick={() => {
                    this.setState({ signUp: true });
                  }}
                >
                  회원가입
                </button>
              </div>
            </div>
          ) : !this.state.signUping ? (
            <div
              style={{
                fontSize: "30px",
              }}
            >
              회원가입
              <div className="div-profilem-login">
                <GoogleLogin
                  clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
                  buttonText="Google로 회원가입"
                  onSuccess={this.responseGoogleSignUp}
                  onFailure={this.responseFail}
                />
              </div>
              <div className="div-profilem-buttons div-profilem-buttons-01">
                <div
                  style={{
                    paddingRight: "1vw",
                  }}
                >
                  이미 계정이 있으신가요?
                </div>
                <button
                  className="button-profile-login"
                  onClick={() => {
                    this.setState({ signUp: false });
                  }}
                >
                  로그인
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                fontSize: "30px",
              }}
            >
              거의 끝났습니다!
              <br />
              <img
                style={{ borderRadius: "70%" }}
                src={process.env.PUBLIC_URL + this.state.imageUrl}
                className="img-profilem-signup"
                alt=""
              />
              <div className="div-profilem-text">
                풍방 비밀번호를 입력해주세요.
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="div-profilem-signup">
                  <input
                    type={this.state.visible}
                    className="input-profilem-signup"
                    onChange={this.onChange}
                  />
                  {this.state.visible === "password" ? (
                    <FaEyeSlash
                      className="button-profile-eyeslash"
                      onClick={() => {
                        this.setState({ visible: "text" });
                      }}
                      size="15"
                    />
                  ) : (
                    <FaEye
                      className="button-profile-eye"
                      onClick={() => {
                        this.setState({ visible: "password" });
                      }}
                      size="15"
                    />
                  )}
                </div>
              </div>
              <div className="div-profilem-buttons div-profilem-buttons-02">
                <button
                  className="button-profile-login"
                  onClick={() => {
                    fetch("https://hansori.net/pw", {
                      method: "post",
                      headers: { "content-type": "application/json" },
                    })
                      .then((res) => res.json())
                      .then((json) => {
                        if (this.state.pbpwInput == json.Pw) {
                          const post = {
                            content: this.state.email,
                          };
                          fetch("https://hansori.net/new", {
                            method: "post",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(post),
                          }).then(() => {
                            alert("회원가입이 완료되었습니다.");
                            window.localStorage.clear();
                            window.location.reload();
                          });
                        } else {
                          alert("비밀번호를 다시 확인해주세요.");
                        }
                      });
                  }}
                >
                  계정 생성
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileM;
