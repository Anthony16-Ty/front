import React from "react";


const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;