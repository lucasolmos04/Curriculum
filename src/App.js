import React from "react";
import "./App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Name from "./components/Name";
import Extract from "./components/Extract";
import Education from "./components/Education";
import FurtherTraining from "./components/FurtherTraining";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="containerExt">
        <Name />
        <br></br>
        <Extract />
        <br></br>
        <PersonalInfo />
        <br></br>
        <Education />
        <br></br>
        <FurtherTraining />
        <br></br>
        <WorkExperience />
        <br></br>
        <Skills />
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default App;
