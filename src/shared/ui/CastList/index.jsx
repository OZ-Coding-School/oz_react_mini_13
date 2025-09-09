import styled from 'styled-components';
import { useMovieCast } from '@/api/movieHooks';
import { useParams } from 'react-router-dom';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';
import { PlaySVG } from '@/shared/assets/SVGicons';

const Wrapper = styled.div`
  width: 80%;
  display: inline-block;
  position: relative;
  overflow-x: scroll;
`;
const MainBox = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  padding: 15px 0;
  font-size: 25px;
  font-weight: 600;
  color: '#000';
`;
const WrapBox = styled.div`
  margin: 0 20px 0 0;
`;
const Casting = styled.img`
  position: relative;
  width: 130px;
  height: 195px;
  display: block;
  border-radius: 5px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 90px;
    height: 135px;
  }
`;
const FlexBox = styled.div`
  width: 130px;
  height: 195px;
  background: rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 90px;
    height: 135px;
  }
`;
const FontBox = styled.div`
  width: 130px;
  height: 195px;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  text-decoration: none;

  opacity: 0;
  transition: opacity 0.3s ease;

  ${WrapBox}:hover & {
    cursor: default;
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 90px;
    height: 135px;
  }
`;
const Font = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 20px;
  }
`;
const CastList = () => {
  const params = useParams();
  const data = useMovieCast({ query: `https://api.themoviedb.org/3/movie/${params.id}/credits?language=ko-KR` });

  return (
    <>
      <Wrapper>
        <Title>출연: </Title>
        <MainBox>
          {data?.map((el) => (
            <WrapBox key={el.id}>
              {el.profile ? <Casting src={`https://image.tmdb.org/t/p/w500${el.profile}`} alt={el.name} /> : <FlexBox>{PlaySVG({ fill: '#fff', size: '32' })}</FlexBox>}

              <FontBox>
                <Font>{el.name}</Font>
              </FontBox>
            </WrapBox>
          ))}
        </MainBox>
      </Wrapper>

      <Wrapper></Wrapper>
    </>
  );
};

export default CastList;
