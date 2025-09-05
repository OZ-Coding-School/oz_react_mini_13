import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          }
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        // adult === false 필터링
        const filtered = data.results.filter((movie) => !movie.adult);
        setMovies(filtered);
      } catch (err) {
        console.error("영화 데이터를 불러오지 못했습니다:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p className="p-6 text-center">로딩 중...</p>;
  if (error) return <p className="p-6 text-center text-red-500">에러: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/fallback.jpg"}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default App;
