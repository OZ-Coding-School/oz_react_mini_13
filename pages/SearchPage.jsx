import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          }
        );

        const data = await res.json();
        const filtered = (data.results || []).filter((movie) => !movie.adult);

        setResults(filtered);
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {results.length > 0 ? (
        results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-400">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchPage;
