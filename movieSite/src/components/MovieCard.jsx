import MovieDetail from "./MovieDetail";

import { Link, useNavigate } from 'react-router-dom';
 function MovieCard({posterPath, title, rating}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500" 
    const nav = useNavigate();


  
    return(
        
        <div className="" onClick={() => nav('/details/:id')}>
            
            <img src={`${baseUrl}${posterPath}`} alt="" className="img"/>
            <h3 className="font-[20px]">{title}</h3>
            <span className="rating">평점 : {rating}</span>
        </div>
    )
}
// 1. **`MovieCard`** 컴포넌트를 생성합니다.
// 2. **`App.jsx`** 파일에서 **`MovieCard`** 컴포넌트를 사용하여 영화 목록을 렌더링합니다.
//     1. [map 메서드]를 이용하여 영화 데이터를 **`MovieCard`**로  전달하세요.
// 3. **`App.jsx`** 파일에서 **`movieListData.json`** 데이터를 import하여 상태로 
// 관리합니다.
// 4. **`MovieCard`** 컴포넌트는 필요한 데이터를 **`App.jsx`**
//  파일로 부터 전달받아 **포스터와 제목, 평점 정보**를 렌더링합니다.
// 5. **`movieListData.json`** 의 길이만큼 화면에 **`MovieCard`**를 렌더링합니다.

export default MovieCard;