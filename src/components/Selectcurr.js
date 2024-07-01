import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Example icon, change as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../style/Search.css";

const Selectcurr = (props) => {
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

  const [currency, setCurrency] = useState(props.select || "");
  const [error, setError] = useState(""); // Initialize with props.select value

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currencySymbols[currency.toLowerCase()]) {
      props.setcurr(currency.toLowerCase());
    } else {
      setError("Invalid currency code. Please enter a valid currency code.");
    }
    setCurrency("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={currency}
            onChange={handleCurrencyChange}
            placeholder="Enter currency code (e.g., usd, eur)"
          />
          <button type="submit" className="icon-button">
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default Selectcurr;
