import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { BASE_IMG_URL } from '../App';

export default function MovieDetail() {
  const { id } = useParams();
  const detail = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`);

  if (!detail || !detail.poster_path) return <div>Loading...</div>;

  return (
    <div className="max-w-[1080px] mx-auto p-5 grid grid-cols-8 grid-rows-5 gap-3">
      <img
        src={`${BASE_IMG_URL}${detail.backdrop_path}`}
        alt={detail.title}
        className="col-span-4 row-span-5 object-cover"
      />
      <h1 className="col-span-3 row-span-1 bg-amber-300 text-center text-2xl font-bold flex items-center justify-center p-4 truncate">
        {detail.title}
      </h1>
      <p className="col-span-1 row-span-1 bg-green-300 text-lg flex items-center justify-center">
        ⭐ {detail.vote_average}
      </p>
      <div className="col-span-4 row-span-1 bg-indigo-300 flex items-center gap-2 p-2">
        {detail.genres?.map((genre) => (
          <span key={genre.id} className="px-3 py-1 rounded-full border">
            {genre.name}
          </span>
        ))}
      </div>
      <div className="col-span-4 row-span-3 bg-red-300 p-3">
        {detail.overview}
      </div>
    </div>
  );
}