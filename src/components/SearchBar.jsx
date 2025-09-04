import React from "react";

function SearchBar({ query, setQuery, onEnter }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        value={query}
        autoFocus // 페이지 로드 시 자동 포커스
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) {
            onEnter(); // 엔터키 이벤트 처리 가능
          }
        }}
        placeholder="영화 제목 검색..."
        style={{
          padding: "10px 15px",
          width: "300px",
          maxWidth: "90%",
          borderRadius: "25px",
          border: "1px solid #ccc",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
  
      <style>{`
        @media (max-width: 480px) {
          input {
            width: 90%;
            font-size: 14px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
