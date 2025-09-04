import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// 장르 ID → 한글 이름 매핑
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

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111",
          color: "#fff",
          borderRadius: "12px",
          padding: "20px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        }}
      >
        {/* 포스터 */}
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />

        {/* 제목 */}
        <h2>{movie.title}</h2>

        {/* 장르 */}
        <p>
          <strong>장르:</strong>{" "}
          {movie.genre_ids
            ? movie.genre_ids.map((id) => GENRES[id] || id).join(", ")
            : "정보 없음"}
        </p>

        {/* 평점 */}
        <p>
          <strong>평점:</strong> {movie.vote_average} / 10
        </p>

        {/* 출시일 */}
        <p>
          <strong>출시일:</strong> {movie.release_date || "정보 없음"}
        </p>

        {/* 줄거리 */}
        <p style={{ lineHeight: "1.6", marginTop: "12px" }}>
          <strong>줄거리:</strong> {movie.overview || "줄거리 없음"}
        </p>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#e50914",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default MovieModal;
