const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=1`, { headers });
  const data = await response.json();
  return data.results.filter((movie) => !movie.adult);
};

export const getMovieDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?language=ko-KR`, { headers });
  return await response.json();
};
