import React, { Component, useState, useEffect } from "react";
import Currency from "./Currency";
import "./App.css";

const Link = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    fetch(Link)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <>
      <h1>Convert Amount</h1>
      <Currency currencyOptions={currencyOptions} />
      <div className="equals">=</div>
      <Currency currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
