import React from "react";

import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Todos items={["Learn Ts", "Learn React"]} />
    </>
  );
}

export default App;
