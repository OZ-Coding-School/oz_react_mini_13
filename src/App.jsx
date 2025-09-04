import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import MovieModal from "./components/MovieModal";

function App() {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 검색 필터 적용
  const filteredMovies = movieListData.results.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <SearchBar query={query} setQuery={setQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  style={{ cursor: "pointer" }}
                >
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetail data={movieListData.results} />}
        />
      </Routes>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Layout>
  );
}

export default App;

