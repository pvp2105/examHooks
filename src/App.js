import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./component/colorBox";

function App() {
  return (
    <div className="app">
      <h1>Welcome</h1>

      <ColorBox />
    </div>
  );
}

export default App;
