import styled from 'styled-components';
import { useMovieList } from '@/api/movieHooks';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';
import MovieCard from '@/shared/ui/Card/MovieCard';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  padding: 20px 0;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 15px 0;
    font-size: 30px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 10px 0;
    font-size: 25px;
  }
`;
const MoviesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: 10px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 5px;
  }
`;

const PopularMovies = () => {
  const popularMovie = useMovieList({ query: 'https://api.themoviedb.org/3/discover/movie?language=ko-KO&include_adult=false&sort_by=popularity.desc&page=1&with_genres=' });

  return (
    <Wrapper>
      <MainBox>
        <MoviesList>
          {popularMovie?.map((el) => (
            <MovieCard key={el.id} data={el} />
          ))}
        </MoviesList>
      </MainBox>
    </Wrapper>
  );
};

export default PopularMovies;
