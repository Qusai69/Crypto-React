import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import '../style/Navbar.css';

const Navbar = (props) => {
  return (
    <Link to="/" >
      <div className="navbar">
        <FontAwesomeIcon icon={faCoins} className="icons" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
