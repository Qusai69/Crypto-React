import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import "../style/Coin.css";
import Coinitem from "./Coinitem";
import SearchBar from "./SearchBar";
import Selectcurr from "./Selectcurr";

const Coins = (props) => {
  const [sortCriteria, setSortCriteria] = useState({
    field: "market_cap_rank",
    direction: "asc",
  });
  const [filteredCoins, setFilteredCoins] = useState(null);

  const toggleSortDirection = (field) => {
    if (field === sortCriteria.field) {
      setSortCriteria({
        ...sortCriteria,
        direction: sortCriteria.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortCriteria({ field, direction: "asc" });
    }
  };

  const getSortIndicator = (field) => {
    if (field === sortCriteria.field) {
      return sortCriteria.direction === "asc" ? (
        <FontAwesomeIcon icon={faSortUp} className="arrowup" />
      ) : (
        <FontAwesomeIcon icon={faSortDown} className="arrowdown" />
      );
    }
    return null;
  };

  const sortedCoins = useMemo(() => {
    return (filteredCoins || props.coins).sort((a, b) => {
      const field = sortCriteria.field;
      const direction = sortCriteria.direction === "asc" ? 1 : -1;

      switch (field) {
        case "market_cap_rank":
          return direction * (a.market_cap_rank - b.market_cap_rank);
        case "name":
          return direction * a.name.localeCompare(b.name);
        case "current_price":
          return direction * (a.current_price - b.current_price);
        case "price_change_percentage_24h":
          return (
            direction *
            (a.price_change_percentage_24h - b.price_change_percentage_24h)
          );
        case "total_volume":
          return direction * (a.total_volume - b.total_volume);
        case "market_cap":
          return direction * (a.market_cap - b.market_cap);
        default:
          return 0;
      }
    });
  }, [filteredCoins, props.coins, sortCriteria]);

  const handleFilter = (filteredItems) => {
    setFilteredCoins(filteredItems);
  };

  const currencySymbols = {
    usd: "$",
    eur: "€",
    inr: "₹",
    gbp: "£",
    jpy: "¥",
    aud: "A$",
    cad: "C$",
    chf: "CHF",
    cny: "¥",
    sek: "kr",
    nzd: "NZ$",
    mxn: "Mex$",
    sgd: "S$",
    hkd: "HK$",
    nok: "kr",
    krw: "₩",
    try: "₺",
    rub: "₽",
    zar: "R",
    brl: "R$",
    idr: "Rp",
    twd: "NT$",
    myr: "RM",
    thb: "฿",
    vnd: "₫",
    php: "₱",
    pln: "zł",
    dkk: "kr",
    huf: "Ft",
    czk: "Kč",
    ils: "₪",
    clp: "CLP$",
    pkr: "₨",
    bdt: "৳",
    ngn: "₦",
    egp: "E£",
    kes: "KSh",
    ghs: "₵",
    kwd: "KD",
    omr: "ر.ع.",
    qar: "ر.ق",
    bhd: "BD",
    jod: "JD",
    sar: "ر.س",
    aed: "د.إ",
  };

  const selectedCurrencySymbol = currencySymbols[props.select.toLowerCase()];

  return (
    <div className="container">
      <SearchBar
        coins={props.coins}
        onFilter={handleFilter}
      />
      <Selectcurr
        select={props.select}
        setcurr={props.setcurr}
      />
      <div>
        <div className="heading">
          <div
            className="sort-heading"
            onClick={() => toggleSortDirection("market_cap_rank")}
          >
            <p>Rank {getSortIndicator("market_cap_rank")}</p>
          </div>
          <div
            className="sort-heading"
            onClick={() => toggleSortDirection("name")}
          >
            <p className="coin-name">Coin Name {getSortIndicator("name")}</p>
          </div>
          <div
            className="sort-heading"
            onClick={() => toggleSortDirection("current_price")}
          >
            <p>Price {getSortIndicator("current_price")}</p>
          </div>
          <div
            className="sort-heading"
            onClick={() => toggleSortDirection("price_change_percentage_24h")}
          >
            <p>
              24h % Change {getSortIndicator("price_change_percentage_24h")}
            </p>
          </div>
          <div
            className="sort-heading hide-mobile"
            onClick={() => toggleSortDirection("total_volume")}
          >
            <p>Volume {getSortIndicator("total_volume")}</p>
          </div>
          <div
            className="sort-heading hide-mobile"
            onClick={() => toggleSortDirection("market_cap")}
          >
            <p>Market Cap {getSortIndicator("market_cap")}</p>
          </div>
        </div>
        {sortedCoins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <Coinitem coins={coin} curr={selectedCurrencySymbol} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
