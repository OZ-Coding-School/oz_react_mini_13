import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from '@/lib/supabase';
import { useAuth } from './AuthContext';

// 🧩 BookmarkContext: 사용자의 영화 찜 목록(북마크)을 전역으로 관리하는 컨텍스트
// - 로그인 시 Supabase에서 북마크 데이터 불러옴
// - 북마크 추가/삭제 기능(toggleBookmark)
// - 현재 영화가 북마크 되었는지 확인(isBookmarked)

// context 생성
const BookmarkContext = createContext();

export function useBookmark() {
  const context = useContext(BookmarkContext);
  if (!context)
    throw new Error('useBookmark must be used within BookmarkProvider');
  return context;
}

// 실제 데이터 관리
export function BookmarkProvider({ children }) {
  const supabase = useSupabase();
  const { user } = useAuth();

  // 상태
  const [bookmarks, setBookmarks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // 로그인 상태 변경 시, 유저 북마크 목록 불러오기
  useEffect(() => {
    if (!user) {
      // 로그아웃 시 북마크 초기화
      setBookmarks([]);
      setLoaded(true);
      return;
    }

    async function fetchBookmarks() {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('user_id, movie_id, movie_title, poster_path, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!error) setBookmarks(data); // 성공하면 데이터 저장
      setLoaded(true);
    }

    fetchBookmarks();
  }, [supabase, user]);

  // 북마크 추가/삭제
  async function toggleBookmark(movie) {
    if (!user) {
      alert('로그인이 필요합니다!');
      return;
    }

    // 현재 영화가 북마크 상태인지 확인
    const isBookmarked = bookmarks.some((b) => b.movie_id === movie.movie_id);

    if (isBookmarked) {
      // 이미 북마크된 경우 → 삭제
      await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', user.id)
        .eq('movie_id', movie.movie_id);

      setBookmarks((prev) => prev.filter((b) => b.movie_id !== movie.movie_id));
    } else {
      // 새 북마크 추가
      await supabase.from('bookmarks').insert([
        {
          user_id: user.id,
          movie_id: movie.movie_id,
          movie_title: movie.movie_title,
          poster_path: movie.poster_path,
        },
      ]);

      setBookmarks((prev) => [movie, ...prev]);
    }
  }

  // 특정 영화 북마크 여부 확인
  const isBookmarked = (movie_id) =>
    bookmarks.some((b) => b.movie_id === movie_id);

  // 컨텍스트 전역으로 내보내기
  return (
    <BookmarkContext.Provider
      value={{ bookmarks, loaded, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
