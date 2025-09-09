import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useMovieSearchList } from '@/api/movieHooks';
import SearchMovieCard from '@/shared/ui/Card/SearchMovieCard';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.div`
  padding: 30px 0;
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  &::after {
    content: '';
    flex: auto;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 20px 0;
    gap: 20px;
  }
`;

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const text = searchParams.get('q');

  const data = useMovieSearchList({ query: `https://api.themoviedb.org/3/search/movie?language=ko-KO&include_adult=false&query=${text}`, text: searchParams.get('q') });

  return (
    <Wrapper>
      {text && (
        <SearchBox>
          {data?.map((el) => (
            <SearchMovieCard key={el.id} data={el} />
          ))}
        </SearchBox>
      )}
    </Wrapper>
  );
};

export default MovieSearch;
