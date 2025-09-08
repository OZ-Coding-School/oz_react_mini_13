import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', width: '200px' }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </div>
  );
}
