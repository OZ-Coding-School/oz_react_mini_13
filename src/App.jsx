import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

// .env 파일에 저장된 API 토큰 값
const TMDB_API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}`, // API 토큰 사용
            },
          }
        );

        if (!response.ok) {
          throw new Error('API 호출에 실패했습니다.');
        }

        const data = await response.json();
        
        // adult 값이 false인 영화만 필터링
        const filteredMovies = data.results.filter(movie => movie.adult === false);
        setMovies(filteredMovies);
        
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-slate-900 text-white p-4 md:p-8">
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