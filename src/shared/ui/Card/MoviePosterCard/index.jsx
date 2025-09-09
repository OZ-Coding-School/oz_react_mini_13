import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { searchModeSlice, searchQuerySlice } from '@/shared/store';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';
const Wrapper = styled.div`
  display: flex;
  margin: 0 30px 0 0;
  align-items: flex-end;

  color: #000;
  text-decoration: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    margin: 0 15px 0 0;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0 10px 0 0;
  }
`;
const Num = styled.div`
  padding: 0 30px 0 0;
  font-size: 50px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 0 20px 0 0;
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0 10px 0 0;
    font-size: 30px;
  }
`;
const Poster = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: 300px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 200px;
  }
`;

const MoviePosterCard = (pr) => {
  const dispatch = useDispatch();

  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };

  return (
    <Wrapper>
      <Num>{pr.index}</Num>
      <Link to={`/details/${pr.data.id}`} onClick={() => ToggleAndClear()}>
        <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} />
      </Link>
    </Wrapper>
  );
};

export default MoviePosterCard;
