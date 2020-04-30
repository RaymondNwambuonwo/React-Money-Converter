import React, { Component, useState, useEffect } from "react";
import Currency from "./Currency";
import "./App.css";

const Link = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(Link)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  return (
    <>
      <h1>Convert Amount</h1>
      <Currency
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
      />
      <div className="equals">=</div>
      <Currency
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
      />
    </>
  );
}

export default App;
