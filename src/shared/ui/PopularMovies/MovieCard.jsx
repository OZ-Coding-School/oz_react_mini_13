import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  color: #000;
  text-decoration: none;
`;
const Poster = styled.img`
  width: 355px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
  transition: 0.2s;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;
const FlexBox = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  padding: 15px 0;

  width: 280px;
  font-size: 25px;
  font-weight: 600;
  text-overflow: ellipsis;
`;
const Rating = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const MovieCard = (pr) => {
  return (
    <Wrapper>
      <Link to={`/details/${pr.data.id}`}>
        <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} />
      </Link>
      <FlexBox>
        <Title>{pr.data.title}</Title>
        <Rating>평점: {pr.data.vote_average}</Rating>
      </FlexBox>
    </Wrapper>
  );
};

export default MovieCard;
