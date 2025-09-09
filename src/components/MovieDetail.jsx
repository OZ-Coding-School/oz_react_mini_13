import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { //랜더링 막기위해 
    getMovieDetail(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]); //의존성 배열 //빈배열 처음 한번만 실행 한다. 

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetail;
