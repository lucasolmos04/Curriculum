import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import PersonalInfo from "./components/PersonalInfo";
import Name from "./components/Name";
import Extract from "./components/Extract";
import Education from "./components/Education";
import FurtherTraining from "./components/FurtherTraining";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Menu />
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
    </div>
  );
}

export default App;
