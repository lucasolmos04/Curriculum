import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import PersonalInfo from "./components/PersonalInfo";
import Name from "./components/Name";
import Extract from "./components/Extract";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="App-Main">
        <Menu />
        <Container>
          <Name />
          <Extract />
          <br></br>
          <PersonalInfo />
          <br></br>
        </Container>
      </div>
    </div>
  );
}

export default App;
