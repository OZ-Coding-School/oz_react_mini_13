import { useState } from "react";
import moviesDetail from "../data/movieDetailData.json";

function MovieDetail() {
    const movieDetailData = useState({
        title : moviesDetail.title,
        vote_average : moviesDetail.vote_average,
        genres : moviesDetail.genres.name,
        overview : moviesDetail.overview
    });
    const baseUrl = "https://image.tmdb.org/t/p/w500" ;
    const genresText = (moviesDetail.genres || []).map(g => g.name).join(" , ");

    return(
        <div className="movie" >
            <img src={`${baseUrl}${moviesDetail.backdrop_path}`} alt="" className="img"/>
            <h3 className="title">영화 제목 : {moviesDetail.title}</h3>
            <span className="rating">평점 : {moviesDetail.vote_average}</span>
            <p className="genres">장르 : {genresText}</p>
            <p className="overview">줄거리 : {moviesDetail.overview}</p>
        </div>
    )
}
export default MovieDetail;