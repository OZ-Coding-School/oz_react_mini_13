import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return (
    // 'bg-black' 클래스를 제거하여 부모 컴포넌트의 배경색을 따르게 합니다.
    <div className="text-white p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-4">인기순</h2>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg">영화 목록을 불러오는 중...</p>
        )}
      </div>
    </div>
  );
};

export default App;