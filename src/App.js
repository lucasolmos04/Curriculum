import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import PersonalInfo from "./components/PersonalInfo";
import Name from "./components/Name";
import {} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="App-Main">
        <Menu />
        <div className="container">
          <Name />
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
