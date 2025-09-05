import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 600); // 입력 정지 후 600ms에 반응
  const navigate = useNavigate();

  React.useEffect(() => {
    if (debouncedQuery.trim()) {
    navigate(`/search?query=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🎬 MovieApp</Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <input 
          type="text"
          placeholder="영화 제목을 입력 하십시오" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default NavBar;
