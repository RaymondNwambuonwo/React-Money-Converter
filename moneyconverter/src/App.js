import React, { Component, useState, useEffect } from "react";
import Currency from "./Currency";
import "./App.css";

const Link = "https://api.exchangeratesapi.io/latest";

function App() {
  useEffect(() => {
    fetch(Link)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
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
