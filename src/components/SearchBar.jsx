import React from "react";

function SearchBar({ query, setQuery }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="영화 제목 검색..."
        style={{
          padding: "10px 15px",
          width: "300px",
          maxWidth: "90%",
          borderRadius: "25px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default SearchBar;
