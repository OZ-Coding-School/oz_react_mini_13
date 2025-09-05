import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 30px 0 0;
  align-items: flex-end;

  color: #000;
  text-decoration: none;
`;
const Num = styled.div`
  padding: 0 30px 0 0;
  font-size: 50px;
  font-weight: 600;
`;
const Poster = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;

const MoviePosterCard = (pr) => {
  return (
    <Wrapper>
      <Num>{pr.index}</Num>
      <Link to={`/details/${pr.data.id}`}>
        <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} />
        <Poster src={`https://image.tmdb.org/t/p/w500/nmtMNxslljllSTVtt7VIOXdxSZp.jpg`} />
      </Link>
    </Wrapper>
  );
};

export default MoviePosterCard;
