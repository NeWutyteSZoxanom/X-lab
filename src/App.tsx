import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="App_flex">
        <Menu />

        <Content />
      </div>
    </div>
  );
};

export default App;
