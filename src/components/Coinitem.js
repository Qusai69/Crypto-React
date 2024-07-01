import React from "react";
import "../style/Coin.css";

const Coinitem = (props) => {
  const formatToExponential = (value) => {
    if (!value) return "";
    return Number(value).toExponential(3);
  };
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol && props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>
        {props.curr} {props.coins.current_price.toLocaleString()}
      </p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
      <p className="hide-mobile inline">
        {formatToExponential(props.coins.total_volume)}
      </p>
      <p className="hide-mobile inline">
        {props.curr} {formatToExponential(props.coins.market_cap)}
      </p>
    </div>
  );
};

export default Coinitem;
