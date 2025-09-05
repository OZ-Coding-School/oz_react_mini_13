import { Route, Routes } from 'react-router-dom';
import NavBar from '@/shared/layouts/Navbar';
import PopularMovies from '@/shared/ui/PopularMovies';
import MovieDetail from '@/pages/MovieDetail';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    background: ${(pr) => (pr.$isDarkMode ? '#000' : '#fff')};
    color: ${(pr) => (pr.$isDarkMode ? '#fff' : '#000')};
  }
`;

const Layout = () => {
  const isDarkMode = useSelector((state) => state.setDarkMode);

  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <MainBox $isDarkMode={isDarkMode}>
              <PopularMovies />
            </MainBox>
          }
        />
        <Route path='/details/:id' element={<MovieDetail />} />
      </Routes>
    </Wrapper>
  );
};

export default Layout;
