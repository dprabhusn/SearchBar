import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="container py-5">
      <h2 className="text-center">Search Bar</h2>
      <div className="input-group py-3">
        <input
          type="text"
          placeholder="Search items here..."
          value={query}
          className="form-control"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="list-group">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, id) => (
            <li className="list-group-item" key={id}>
              {item}
            </li>
          ))
        ) : (
          <p className="p-5 bg-white text-center fw-semibold fs-3">
            Searched items not found
          </p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
