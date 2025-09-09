import { BREAKPOINTS } from '@/shared/styles/breakpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255, 0.9);
  z-index: 1;
`;
export const MainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-bottom: 1px solid gray;
`;
export const FirstBox = styled.div`
  width: 80%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(Link)`
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
export const BtBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Bt = styled.div`
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  color: gray;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #000;
    color: #fff;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const MenuIcon = styled(Icon)`
  display: none;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: inline-block;
  }
`;

export const InputBox = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 30px;
  }
`;
export const Input = styled.input`
  width: 80%;
  height: 40px;

  background: none;
  font-size: 20px;
  border: none;
  outline: none;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 30px;
    font-size: 16px;
  }
`;

export const Box = styled.div``;
