import React from "react";
import moviesData from "../assets/movieListData.json"; // 리스트 데이터
import MovieCard from "../components/MovieCard";

const App = () => {
  // JSON에서 results 배열을 꺼냄
  const movies = moviesData.results;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDB 이미지 URL
          title={movie.title}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default App;
