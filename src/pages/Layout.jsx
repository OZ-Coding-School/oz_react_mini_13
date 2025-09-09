import { Route, Routes } from 'react-router-dom';
import NavBar from '@/shared/layouts/Navbar';
import Top20Movies from '@//shared/ui/Top20Movies';
import PopularMovies from '@/shared/ui/PopularMovies';
import MovieDetail from '@/pages/MovieDetail';
import styled from 'styled-components';
import MovieSearch from './MovieSearch';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #000;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = () => {
  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <MainBox>
              <Top20Movies />
              <PopularMovies />
            </MainBox>
          }
        />
        <Route path='/details/:id?' element={<MovieDetail />} />

        <Route path='/details/search' element={<MovieSearch />} />
      </Routes>
    </Wrapper>
  );
};

export default Layout;
