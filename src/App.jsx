import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, Outlet } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">mOvieZ</div>
      <div className="navbar-search">
        <input type="text" placeholder="검색..." />
      </div>
      
      <div className="navbar-auth">
        <button className="auth-button">로그인</button>
        <button className="auth-button">회원가입</button>
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

const MovieCard = ({ posterPath, title, voteAverage }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const imageUrl = posterPath 
    ? `${imageBaseUrl}${posterPath}` 
    : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">Rating: {voteAverage.toFixed(1)}</p>
      </div>
    </div>
  );
};

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/movieListData.json')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };

  return (
    <>
      <h1 className="page-title">영화 목록</h1>
      <div className="movie-list-container">
        {movies.map(movie => (
          <div onClick={() => handleMovieClick(movie.id)} key={movie.id}>
            <MovieCard
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch('/movieListData.json')
      .then(response => response.json())
      .then(data => {
        const foundMovie = data.results.find(m => m.id.toString() === movieId);
        setMovie(foundMovie);
      })
      .catch(error => console.error('Error fetching movie detail:', error));
  }, [movieId]);

  if (!movie) {
    return <div>로딩 중이거나 영화를 찾을 수 없습니다.</div>;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const backdropImageUrl = movie.backdrop_path
    ? `${imageBaseUrl}${movie.backdrop_path}`
    : 'https://via.placeholder.com/1920x1080.png?text=No+Backdrop';
  const posterImageUrl = movie.poster_path
    ? `${imageBaseUrl}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Poster';

  return (
    <div className="movie-detail-container">
      <div className="movie-backdrop" style={{ backgroundImage: `url(${backdropImageUrl})` }}>
        <div className="overlay"></div>
      </div>

      <div className="movie-content">
        <div className="content-flex-container">
          <div className="poster-container">
            <img src={posterImageUrl} alt={movie.title} className="movie-poster" />
          </div>

          <div className="info-container">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-rating">평균 평점: {movie.vote_average}</p>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="details/:movieId" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;