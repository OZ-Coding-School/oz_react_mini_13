import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PopularMovieFetch } from '../../../api/tmbc';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    color: ${(pr) => (pr.$isDarkMode ? '#fff' : '#000')};
  }
`;
const MainBox = styled.div`
  margin: 40px 0 0 0;
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  padding: 15px 0;
  font-size: 25px;
  font-weight: 600;
`;
const Box = styled.div`
  height: 1180px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow: scroll;
`;
const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
const Poster = styled.img`
  width: 350px;
  height: 540px;
`;
const Title = styled.div`
  padding: 10px 0;
  font-size: 18px;
`;

const SimilarMovies = () => {
  const isDarkMode = useSelector((state) => state.setDarkMode);
  const params = useParams();

  const ListData = PopularMovieFetch({ query: `https://api.themoviedb.org/3/movie/${params.id}/similar?language=ko-KO&page=1`, enabled: true });

  return (
    <Wrapper $isDarkMode={isDarkMode}>
      <MainBox>
        <Head>비슷한 영화</Head>

        <Box>
          {ListData?.map((el) => (
            <Flex key={el.id} to={`/details/${el.id}`}>
              <Poster src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />

              <Title>{el.title}</Title>
            </Flex>
          ))}
        </Box>
      </MainBox>
    </Wrapper>
  );
};

export default SimilarMovies;
