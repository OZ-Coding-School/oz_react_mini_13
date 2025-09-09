import React from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const NavBar = ({ query, setQuery }) => {
  const debouncedQuery = useDebounce(query, 600);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/search?query=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  const handleReset = () => {
    setQuery(""); // 검색어 초기화
    navigate("/"); // 홈으로 이동
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <button onClick={handleReset} className="text-xl font-bold">
        🎬 MovieApp
      </button>
      <div className="flex gap-4">
        <button onClick={handleReset} className="hover:text-gray-300">
          Home
        </button>
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
