import React from "react";
import movieDetail from "../assets/movieDetailData.json";

const MovieDetail = () => {
  return (
    <div className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})` }}
    >
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-3 gap-4">
        {/* 포스터 */}
        <div className="col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* 오른쪽 영역 */}
        <div className="col-span-2 grid grid-rows-[auto_auto_1fr] gap-4">
          {/* 제목 + 평점 */}
          <div className="flex justify-between items-center bg-[gray] text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold">{movieDetail.title}</h1>
            <p className="text-lg">⭐ {movieDetail.vote_average}</p>
          </div>

          {/* 장르 */}
          <div className="bg-[gray] text-white p-4 rounded-lg">
            {movieDetail.genres?.map((g) => g.name).join(", ") || "장르 정보 없음"}
          </div>

          {/* 줄거리 */}
          <div className="bg-[gray] text-white p-4 rounded-lg overflow-y-auto">
            {movieDetail.overview || "줄거리 정보 없음"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
