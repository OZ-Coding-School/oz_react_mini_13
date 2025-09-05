import React from "react";
import movieListData from "../data/movieListData.json";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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

function MovieDetail() {
 
  const movie = movieListData.results.find((m) =>
    m.title.includes("쿵푸팬더")
  );

  if (!movie) {
    return <h2 style={{ textAlign: "center" }}>쿵푸팬더 영화를 찾을 수 없습니다.</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <h2>{movie.title}</h2>
      <p><strong>장르:</strong> {movie.genre_ids.map(id => GENRES[id] || id).join(", ")}</p>
      <p><strong>평점:</strong> {movie.vote_average} / 10</p>
      <p><strong>출시일:</strong> {movie.release_date}</p>
      <p style={{ lineHeight: "1.6" }}>{movie.overview || "줄거리 없음"}</p>
    </div>
  );
}

export default MovieDetail;
