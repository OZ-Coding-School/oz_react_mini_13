import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useMovieList } from '@/api/movieHooks';
import SearchMovieCard from '../Card/SearchMovieCard';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: '#000';
`;
const MainBox = styled.div`
  margin: 40px 0 0 0;
  width: 80%;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  overflow: scroll;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: 10px;
  }
`;

const SimilarMovies = () => {
  const params = useParams();

  const ListData = useMovieList({ query: `https://api.themoviedb.org/3/movie/${params.id}/similar?language=ko-KO&page=1` });

  return (
    <Wrapper>
      <MainBox>
        <Head>비슷한 영화</Head>

        {ListData?.length !== 0 && (
          <Box>
            {ListData?.map((el) => (
              <SearchMovieCard key={el.id} data={el} width='350px' height='500px' fontSize='30px' />
            ))}
          </Box>
        )}
      </MainBox>
    </Wrapper>
  );
};

export default SimilarMovies;
