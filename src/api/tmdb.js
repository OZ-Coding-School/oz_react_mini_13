export const fetchPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`
  );
  const data = await res.json();
  return data.results.filter((m) => !m.adult);
};

export const fetchMovieDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`
  );
  return await res.json();
};
