import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          }
        );


        // adult === false인 영화만 필터링
        const filtered = res.data.results.filter((movie) => !movie.adult);
        setMovies(filtered);
      } catch (error) {
        console.error("영화 데이터를 불러오지 못했습니다:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default App;
