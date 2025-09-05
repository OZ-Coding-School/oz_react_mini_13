import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  color: #000;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
const Poster = styled.img`
  width: 200px;
`;
const Title = styled.div`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
`;
const Rating = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const MovieCard = (pr) => {
  return (
    <Wrapper to={`/details/${pr.movieList.id}`}>
      <Poster src={`https://image.tmdb.org/t/p/w500${pr.movieList.poster_path}`} />
      <Title>{pr.movieList.title}</Title>
      <Rating>{pr.movieList.vote_average}</Rating>
    </Wrapper>
  );
};

export default MovieCard;
