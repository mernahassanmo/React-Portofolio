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
        <Navbar />
        <hr className="mb-3"/>
        <Aboutme  />
        <Download />
        <Skills />
        <Portfolio  />
        <Footer  />
      </>
    );
  }
}

export default App;
