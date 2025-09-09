import styled from 'styled-components';
import MovieCard from '@/shared/ui/PopularMovies/MovieCard';
import { PopularMovieFetch } from '../../../api/tmbc';

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
`;
const MoviesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const PopularMovies = () => {
  const popularMovie = PopularMovieFetch({ query: 'https://api.themoviedb.org/3/discover/movie?language=ko-KO&include_adult=false&sort_by=popularity.desc&page=1&with_genres=', enabled: true });

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
