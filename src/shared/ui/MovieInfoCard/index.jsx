import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/api/movieHooks';
import { FavoritesSVG } from '@/shared/assets/SVGicons';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${(pr) => pr.$bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: 80vh;
    bottom: 0;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    align-items: stretch;
  }
`;
const MainBox = styled.div`
  width: 70%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 100%;
  }
`;

const LBox = styled.div`
  padding: 20px;
  margin: 0 20px 0 0;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 18px;

  background: rgb(0, 0, 0, 0.5);

  color: #fff;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 30px;
    margin: 0;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    justify-content: flex-end;
  }
`;
const TitleBox = styled.div`
  margin: 0 0 10px 0;
  display: flex;
  align-items: flex-end;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 50px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 40px;
  }
`;
const Text = styled.div`
  padding: 8px 0;
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 14px;
  }
`;
const Like = styled.div`
  margin: 0 0 0 20px;
  font-size: 30px;
`;

const Poster = styled.img`
  width: 466px;
  height: 700px;
  border-radius: 5px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const MovieInfoCard = () => {
  const params = useParams();
  const DetailData = useMovieDetail({ query: `https://api.themoviedb.org/3/movie/${params.id}?language=ko-KO` });

  return (
    <Wrapper $bg={`https://image.tmdb.org/t/p/w500${DetailData.backdrop_path}`}>
      <MainBox>
        <LBox>
          <TitleBox>
            <Title>{DetailData.title}</Title>
            {/* <Like>{FavoritesSVG({ size: '32', fill: 'red', stroke: 'red' })}</Like> */}
            {/* <Like>{FavoritesSVG({ size: '32', fill: 'none', stroke: '#fff' })}</Like> */}
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
        </LBox>
        <Poster src={`https://image.tmdb.org/t/p/w500${DetailData.poster_path}`} />
      </MainBox>
    </Wrapper>
  );
};

export default MovieInfoCard;
