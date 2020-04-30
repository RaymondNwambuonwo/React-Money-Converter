import React from "react";
import Currency from "./Currency";
import "./App.css";

function App() {
  return (
    <>
      <h1>Convert Amount</h1>
      <Currency />
      <div classname="equals">=</div>
      <Currency />
    </>
  );
}

export default App;
