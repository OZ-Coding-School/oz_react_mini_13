// 임포트 { 유즈 네비게이트 } 프롬 '리액트-라우터-돔'
// 페이지 이동 기능을 위해 useNavigate 훅 사용
import { useNavigate } from 'react-router-dom';

// 익스포트 디폴트 펑션 무비 카드 ({ 무비 })
// 개별 영화 정보를 카드 형태로 보여주는 컴포넌트
export default function MovieCard({ movie }) {
  // 컨스트 네비게이트 이퀄 유즈 네비게이트()
  // navigate 함수로 페이지 이동 기능 활성화
  const navigate = useNavigate();

  // 컨스트 핸들 클릭 이퀄 () => { 네비게이트(`/무비/${무비.아이디}`) }
  // 카드 클릭 시 해당 영화 상세페이지로 이동
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  // 리턴 디브
  // 영화 포스터와 제목을 화면에 렌더링
  return (
    <div
      onClick={handleClick}
      style={{ cursor: 'pointer', width: '200px' }} // 커서 포인터, 카드 너비 지정
    >
      {/* 이미지 src=`https://image.tmdb.org/t/p/w200${무비.포스터_패스}` alt={무비.타이틀} */}
      {/* TMDB 이미지 URL로 영화 포스터 표시, alt 속성에 제목 적용 */}
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      {/* 에이치3 {무비.타이틀} */}
      {/* 영화 제목을 화면에 보여줌 */}
      <h3>{movie.title}</h3>
    </div>
  );
}

// 익스포트 디폴트 무비 카드
// MovieCard 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
