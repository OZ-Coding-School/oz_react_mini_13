import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlaySVG } from '../../assets/SVGicons/40pxIcon';

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;

  position: absolute;

  background: rgb(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(Link)`
  font-size: 40px;

  text-decoration: none;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;
const InputBox = styled.div`
  width: 600px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #fff;
`;
const Input = styled.input`
  width: 550px;

  font-size: 20px;
  border: none;
  outline: none;
`;
const BtBox = styled.div`
  display: flex;
  align-items: center;
`;
const Bt = styled.div`
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #000;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <MainBox>
        <Logo to={'./'}>{PlaySVG({ fill: '#fff' })}</Logo>
      </MainBox>
    </Wrapper>
  );
};

export default NavBar;
