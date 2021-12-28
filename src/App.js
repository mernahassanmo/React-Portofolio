import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Aboutme from "./Aboutme";
import Download from "./Download";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar  className="mb-3"/>
        <hr className="m-3"/>
        <Aboutme className="mb-3" />
        <Download /><br/><br/><br/>
        <Skills /><br/><br/><br/>
        <Portfolio  />
        <Footer  />
      </>
    );
  }
}

export default App;
