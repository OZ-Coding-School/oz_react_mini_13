import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";
import movieListData from "./data/movieListData.json";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 검색 필터 적용
  const filteredMovies = movieListData.results.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <SearchBar query={query} setQuery={setQuery} />
              <MovieList
                movies={filteredMovies}
                onSelect={(movie) => setSelectedMovie(movie)}
              />
              {selectedMovie && (
                <MovieModal
                  movie={selectedMovie}
                  onClose={() => setSelectedMovie(null)}
                />
              )}
            </>
          }
        />
        <Route
          path="movie/:id"
          element={<MovieDetail data={movieListData.results} />}
        />
      </Route>
    </Routes>
  );
}

export default App;