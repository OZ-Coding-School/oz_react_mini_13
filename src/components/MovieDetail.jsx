import React from 'react';
import { useParams, Link } from 'react-router-dom';


const GENRES = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  18: "드라마",
  14: "판타지",
  27: "공포",
  10749: "로맨스",
  878: "SF",
  53: "스릴러",

};

function MovieDetail({ data }) {
  const { id } = useParams();
  const movie = data.find(m => m.id === parseInt(id));

  if (!movie) return <p>영화를 찾을 수 없습니다.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>← 뒤로가기</Link>

      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '300px', display: 'block', marginBottom: '20px' }}
      />

      <p><strong>줄거리:</strong> {movie.overview || "영화 설명이 없습니다."}</p>
      <p>
        <strong>장르:</strong>{" "}
        {movie.genre_ids.map(id => GENRES[id] || id).join(", ")}
      </p>
      <p><strong>평점:</strong> {movie.vote_average} / 10</p>
      <p><strong>출시일:</strong> {movie.release_date}</p>
      <p><strong>인기도:</strong> {movie.popularity}</p>
    </div>
  );
}

export default MovieDetail;
