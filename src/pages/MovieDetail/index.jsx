import MovieInfoCard from '@/shared/ui/MovieInfoCard';
import SimilarMovies from '@/shared/ui/SimilarMovies';
import CastList from '@/shared/ui/CastList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(pr) => (pr.$isDarkMode ? '#000' : '#fff')};
`;

const MovieDetail = () => {
  const isDarkMode = useSelector((state) => state.setDarkMode);

  return (
    <Wrapper $isDarkMode={isDarkMode}>
      <MovieInfoCard />
    </Wrapper>
  );
};

export default MovieDetail;
