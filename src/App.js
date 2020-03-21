import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import PersonalInfo from "./components/PersonalInfo";
import Name from "./components/Name";
import Extract from "./components/Extract";
import Education from "./components/Education";
import FurtherTraining from "./components/FurtherTraining";

function App() {
  return (
    <div className="App">
      <div className="App-Main">
        <Menu />
        <Container>
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
        </Container>
      </div>
    </div>
  );
}

export default App;
