// 임포트 { 유즈 스테이트, 유즈 이펙트 } 프롬 "리액트"
// 리액트에서 상태 관리(useState)와 사이드 이펙트(useEffect) 기능 가져오기
import { useState, useEffect } from "react";

// 임포트 무비 카드 프롬 "./무비 카드"
// 개별 영화 정보를 보여주는 MovieCard 컴포넌트 불러오기
import MovieCard from "./MovieCard";

// 임포트 { 겟 파퓰러 무비스 } 프롬 "../에이피아이/티엠디비"
// TMDB API에서 인기 영화 데이터를 가져오는 함수 불러오기
import { getPopularMovies } from "../api/tmdb";

// 펑션 무비 리스트
// 영화 목록을 보여주는 MovieList 컴포넌트 정의
function MovieList() {
  // 컨스트 [무비스, 셋 무비스] 이퀄 유즈 스테이트(대괄호)
  // movies 상태에 영화 데이터 배열 저장, 기본값은 빈 배열
  const [movies, setMovies] = useState([]);

  // 컨스트 [로딩, 셋 로딩] 이퀄 유즈 스테이트(트루)
  // 로딩 중인지 여부(true/false) 저장, 기본값은 true
  const [loading, setLoading] = useState(true);

  // 유즈 이펙트(() => { 겟 파퓰러 무비스… }, 대괄호)
  // 컴포넌트가 처음 마운트될 때(API 호출) 실행
  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        // 셋 무비스(데이터)
        // 받아온 영화 데이터를 movies 상태에 저장
        setMovies(data);

        // 셋 로딩(폴스)
        // (setLoading(false))
        // 데이터 로딩 완료 → 로딩 상태 해제
        setLoading(false);
      })
      .catch(() => {
        // 캐치(() => 셋 로딩(폴스))
        // (.catch(() => setLoading(false)))
        // 👉 에러가 발생해도 로딩 상태를 false로 변경
        setLoading(false);
      });
  }, []); // 👉 []는 의존성 배열, 최초 한 번만 실행

  // 이프(로딩)
  // (if (loading))
  // 로딩 중일 때 스켈레톤 UI 보여주기
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* 어레이.프롬({랭스:10}).맵((언더스코어, 아이) => 디브)            
        가짜 10개의 박스를 만들어 스켈레톤 UI로 표시 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "200px",
              height: "300px",
              backgroundColor: "#ccc",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    );
  }
  // 리턴 (디브 … 무비스.맵((무비) => 무비 카드))
  // 로딩이 끝나면 실제 영화 카드 리스트를 화면에 출력
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* 무비스.맵((무비) => 무비 카드 키=무비.아이디 무비=무비)   
      movies 배열을 반복(map)해서 각 영화 정보를 MovieCard로 렌더링 */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// 익스포트 디폴트 무비 리스트
// MovieList 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
export default MovieList;
