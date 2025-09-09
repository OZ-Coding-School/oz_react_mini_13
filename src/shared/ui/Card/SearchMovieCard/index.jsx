import { Link } from 'react-router-dom';
import { PlaySVG } from '@/shared/assets/SVGicons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchModeSlice, searchQuerySlice } from '@/shared/store';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;
const Poster = styled.img`
  width: 200px;
  /* height: 300px; */
  display: block;
  border-radius: 5px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 133px;
    height: 200px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 250px;
    height: 358px;
  }
`;
const FlexBox = styled.div`
  width: 200px;
  height: 300px;
  background: rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 133px;
    height: 200px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 250px;
    height: 358px;
  }
`;
const FontBox = styled(Link)`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  text-decoration: none;

  opacity: 0;
  transition: opacity 0.3s ease;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 133px;
    height: 200px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 250px;
    height: 358px;
  }
`;
const Font = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;

const Rating = styled.div`
  font-size: 18px;
  color: #fff;
`;

const SearchMovieCard = (pr) => {
  const dispatch = useDispatch();
  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };
  return (
    <Wrapper>
      {pr.data.poster_path ? <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} alt={pr.data.title} /> : <FlexBox>{PlaySVG({ fill: '#fff', size: '60' })}</FlexBox>}

      <FontBox to={`/details/${pr.data.id}`} onClick={() => ToggleAndClear()}>
        <Font>{pr.data.title}</Font>
        <Rating>평점: {pr.data.vote_average}</Rating>
      </FontBox>
    </Wrapper>
  );
};

export default SearchMovieCard;
