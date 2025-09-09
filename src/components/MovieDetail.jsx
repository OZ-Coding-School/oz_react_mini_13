import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// .env 파일에 저장된 API 토큰 값
const TMDB_API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchMovieDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('영화 상세 정보를 가져오는 데 실패했습니다.');
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError('영화 정보를 불러오는 중 오류가 발생했습니다.');
        console.error('API 호출 오류:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return <div className="text-center p-8">영화 정보를 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-8">에러: {error}</div>;
  }

  if (!movie) {
    return <div className="text-center p-8">해당 영화 정보를 찾을 수 없습니다.</div>;
  }
  
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 영화 포스터를 왼쪽 1/3 너비로 배치 */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img src={posterUrl} alt={movie.title} className="w-full h-auto object-cover" />
        </div>
        
        {/* 영화 정보를 오른쪽 2/3 너비로 배치 */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          
          {/* 평점 */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg">평점: {movie.vote_average.toFixed(1)}</h3>
          </div>

          {/* 장르 */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">장르:</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map(genre => (
                <span key={genre.id} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* 줄거리 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">줄거리:</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;