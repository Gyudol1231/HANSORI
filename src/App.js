import "./App.css";
import Header from "./components/Header";
import HeaderM from "./components/HeaderM";
import Main from "./components/Main";
import MainM from "./components/MainM";
import About from "./components/About";
import AboutM from "./components/AboutM";
import Gallery from "./components/Gallery";
import Pungsa from "./components/Pungsa";
import PungsaM from "./components/PungsaM";
import Pungmul from "./components/Pungmul";
import PungmulM from "./components/PungmulM";
import ProfileTemp from "./components/ProfileTemp";
import Profile from "./components/Profile";
import ProfileM from "./components/ProfileM";
import history from "./components/history";
import popup from "./components/popup";
import Footer from "./components/Footer";
import Pbti from "./components/Pbti";

import { useMediaQuery } from "react-responsive";
import { Route, useLocation } from "react-router-dom";
import Main2 from "./components/Main2";
import Test from "./components/Test";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  let location = useLocation();

  return (
    <>
      {isMobile ? <HeaderM /> : location.pathname === "/" ? null : <Header />}
      {isMobile ? (
        <Route path="/" exact={true} component={MainM} />
      ) : (
        // <Route path="/" exact={true} component={Main2} />
        <Route path="/" exact={true} component={Main} />
      )}
      <Route path="/about" component={About} />
      <Route path="/aboutM" component={AboutM} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/pungsa/:pageNumber" component={Pungsa} />
      <Route path="/pungsaM" component={PungsaM} />
      <Route path="/pungmul" exact={true} component={Pungmul} />
      <Route path="/pungmulM" exact={true} component={PungmulM} />
      <Route path="/profileTemp" component={ProfileTemp} />
      <Route path="/profile" component={Profile} />
      <Route path="/profileM" component={ProfileM} />
      <Route path="/popup" component={popup} />
      <Route path="/history" component={history} />
      <Route path="/pbti" component={Pbti} />
      <Route path="/test" component={Test} />
      <Footer />
    </>
  );
}

export default App;
