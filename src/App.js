import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("usd"); // Default currency
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCurrency]); // Run useEffect when selectedCurrency changes

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              coins={coins}
              select={selectedCurrency}
              setcurr={setSelectedCurrency}
            />
          }
        />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
