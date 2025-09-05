import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-image: url(${(pr) => pr.$bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Poster = styled.img`
  height: 700px;

  border-radius: 5px;
`;

const RBox = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;

  color: #fff;
`;
const Title = styled.div`
  padding: 10px 0;
  font-size: 50px;
  font-weight: 600;
`;
const Text = styled.div`
  padding: 5px 0;
`;

const MovieDetail = (pr) => {
  return (
    <Wrapper $bg={`https://image.tmdb.org/t/p/w500${pr.DetailData.backdrop_path}`}>
      <Poster src={`https://image.tmdb.org/t/p/w500${pr.DetailData.poster_path}`} />

      <RBox>
        <div style={{ display: 'flex' }}>
          <Title>{pr.DetailData.title}</Title>
          <Text>별점: {pr.DetailData.vote_average}</Text>
        </div>
        <Text style={{ display: 'flex' }}>
          장르:
          {pr.DetailData.genres.map((el) => (
            <div style={{ padding: '0 3px' }} key={el.name}>
              {el.name},
            </div>
          ))}
        </Text>
        <Text>상영시간: {pr.DetailData.runtime}</Text>
        <Text>줄거리: {pr.DetailData.overview}</Text>
        <Text>출연:</Text>
      </RBox>
    </Wrapper>
  );
};

export default MovieDetail;
