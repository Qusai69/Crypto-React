import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/Search.css"; // Assuming you have a CSS file for SearchBar styles

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const filterItems = useMemo(() => {
    return props.coins.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [props.coins, query]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue === "") {
      props.onFilter(props.coins);
    } else {
      props.onFilter(filterItems);
    }
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search coins..."
      />
    </div>
  );
};

export default SearchBar;
