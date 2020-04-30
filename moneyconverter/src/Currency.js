import React, { Component } from "react";

function Currency(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount } = props;
  return (
    <div>
      <input type="number" className="input" value={amount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Currency;
