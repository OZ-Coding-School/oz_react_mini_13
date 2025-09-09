import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const API_URL = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko`
    : null;

  const movieData = useFetch(API_URL);

  if (!query) return <div className="p-4">검색어를 입력하세요.</div>;
  if (!movieData.results) return <div className="p-4">로딩 중...</div>;

  return (
    <div className="max-w-[1080px] mx-auto p-4 pt-24">
      <h1 className="text-center text-2xl font-bold mb-4">
        "{query}" 검색 결과
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movieData.results.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
