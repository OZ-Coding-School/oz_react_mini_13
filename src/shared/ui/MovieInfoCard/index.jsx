import { FavoritesSVG } from '@/shared/assets/SVGicons/32pxIcon';
import styled from 'styled-components';
import { DetailMovieFetch } from '../../../api/tmbc';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${(pr) => pr.$bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const MainBox = styled.div`
  width: 1120px;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Poster = styled.img`
  height: 700px;
  border-radius: 5px;
`;

const LBox = styled.div`
  margin: 0 20px 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 18px;

  background: rgb(0, 0, 0, 0.5);

  color: #fff;
`;
const TitleBox = styled.div`
  margin: 0 0 10px 0;
  display: flex;
  align-items: flex-end;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
`;
const Text = styled.div`
  padding: 8px 0;
  font-weight: 400;
  font-size: 18px;
`;
const Like = styled.div`
  margin: 0 0 0 20px;
  font-size: 30px;
`;

const MovieInfoCard = () => {
  const params = useParams();
  const DetailData = DetailMovieFetch({ query: `https://api.themoviedb.org/3/movie/${params.id}?language=ko-KO`, enabled: true });

  return (
    <Wrapper $bg={`https://image.tmdb.org/t/p/w500${DetailData.backdrop_path}`}>
      <MainBox>
        <LBox>
          <TitleBox>
            <Title>{DetailData.title}</Title>
            <Like>{FavoritesSVG({ fill: 'red', stroke: 'red' })}</Like>
            <Like>{FavoritesSVG({ fill: 'none', stroke: '#fff' })}</Like>
          </TitleBox>
          <Text>별점: {DetailData.vote_average}</Text>
          <Text style={{ display: 'flex' }}>
            장르:
            {DetailData.genres?.map((el) => (
              <div style={{ padding: '0 3px' }} key={el.name}>
                {el.name},
              </div>
            ))}
          </Text>
          <Text>상영시간: {DetailData.runtime}</Text>
          <Text>줄거리: {DetailData.overview}</Text>

          <Text>시청 가능한 플랫폼: </Text>
          <Text>출연:</Text>
        </LBox>
        <Poster src={`https://image.tmdb.org/t/p/w500${DetailData.poster_path}`} />
      </MainBox>
    </Wrapper>
  );
};

export default MovieInfoCard;
