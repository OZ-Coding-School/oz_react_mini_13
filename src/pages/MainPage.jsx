import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MainPage.css"; // 이전에 만든 CSS 파일을 import

function MainPage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/movieListData.json')
      .then(response => response.json())
      .then(data => setMovies(data.results)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };

  return (
    <>
      <h1 className="page-title">영화 목록</h1>
      <div className="movie-list-container">
        {movies.map(movie => (
          <div onClick={() => handleMovieClick(movie.id)} key={movie.id}>
            {}
            <MovieCard
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;