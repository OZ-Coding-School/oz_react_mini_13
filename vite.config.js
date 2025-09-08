const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const fetchAPI = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!res.ok) throw new Error("API 호출 실패");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getPopularMovies = async (page = 1) => {
  const data = await fetchAPI(`/movie/popular?page=${page}`);
  return data.results.filter((movie) => !movie.adult);
};

export const searchMovies = async (query, page = 1) => {
  const data = await fetchAPI(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);
  return data.results.filter((movie) => !movie.adult);
};

export const getMovieDetail = async (id) => {
  const movie = await fetchAPI(`/movie/${id}?append_to_response=credits,videos,reviews`);
  return movie;
};
