// 🧩 유저 취향 영화
// - 북마크된 영화만 모아보기, 시각화 대시보드
// - 좋아하는 장르 데이터 시각화

import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, BookmarkX } from 'lucide-react';
import { useBookmark } from '@/contexts/BookmarkContext';
import { IMAGE_URL } from '@/constants/tmdb';

export default function Favorite() {
  const { bookmarks, toggleBookmark } = useBookmark();

  if (bookmarks.length === 0) {
    return (
      <section className="w-full max-w-[1280px] mx-auto p-10 grid place-items-center gap-4">
        <p className="text-lg">아직 수집한 영화가 없어요.</p>
        <p className="flex items-center text-sm text-muted-foreground">
          영화 상세 페이지에서
          <span className="gap-1 px-1">
            <Bookmark className="w-4 h-4" />
          </span>
          버튼을 눌러 취향을 반영해 보세요!
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-[1280px] mx-auto p-5">
      <h1 className="text-2xl font-semibold mb-5">나의 취향</h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {bookmarks.map(({ movie_id, movie_title, poster_path }) => (
          <li key={movie_id} className="group overflow-hidden border">
            <Link to={`/movie/${movie_id}`} className="block">
              {poster_path ? (
                <img
                  src={`${IMAGE_URL}${poster_path}`}
                  alt={movie_title}
                  className="w-full aspect-[2/3] object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full aspect-[2/3] grid place-items-center text-sm text-muted-foreground">
                  No Image
                </div>
              )}
              <div className="p-4 pb-2">
                <h3 className="text-sm font-medium line-clamp-2">
                  {movie_title}
                </h3>
              </div>
            </Link>

            <div className="w-full p-2 pt-0 text-end">
              <button
                type="button"
                onClick={() =>
                  toggleBookmark({
                    movie_id,
                    movie_title,
                    poster_path,
                  })
                }
                className="text-sm hover:bg-accent transition-colors"
                aria-label="Remove bookmark"
              >
                <BookmarkCheck />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
