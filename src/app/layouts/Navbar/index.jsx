import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 70px;

  /* position: absolute; */

  background: #aeaeae;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  padding: 10px 20px;
  font-size: 40px;

  text-decoration: none;
  color: #000;
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
      <Logo to={'./'}>Movie</Logo>
      <InputBox>
        <Input />
      </InputBox>
      <BtBox>
        <Bt>로그인</Bt>
        <Bt>회원가입</Bt>
      </BtBox>
    </Wrapper>
  );
};

export default NavBar;
