import * as S from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuSVG, MoonSVG, SearchSVG, PlaySVG, CloseSVG } from '@/shared/assets/SVGicons';
import { useState } from 'react';
import { searchModeSlice, searchQuerySlice } from '@/shared/store';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const toggle = useSelector((state) => state.searchMode);

  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
    navigation('./');
  };

  const handleChange = (e) => {
    navigation(`/details/search?q=${e.target.value}`);
  };

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.FirstBox>
          <S.Logo to={'./'} onClick={() => dispatch(searchModeSlice.actions.close())}>
            {PlaySVG({ fill: '#000', size: 60 })}
          </S.Logo>

          <S.BtBox>
            {/* <S.Bt>로그인</S.Bt>
            <S.Bt>회원가입</S.Bt> */}
            {/* <S.Icon>{MoonSVG({ size: '32', stroke: '#000' })}</S.Icon> */}
            {toggle ? (
              <S.Icon onClick={() => ToggleAndClear()}>{CloseSVG({ size: '32', stroke: '#000' })}</S.Icon>
            ) : (
              <S.Icon onClick={() => dispatch(searchModeSlice.actions.open())}>{SearchSVG({ size: '32', stroke: '#000' })}</S.Icon>
            )}
            {/* <S.MenuIcon className='tablet' onClick={() => setIsMenuOpen(true)}>
              {MenuSVG({ size: '40', stroke: '#000' })}
            </S.MenuIcon> */}
          </S.BtBox>
        </S.FirstBox>
      </S.MainBox>

      {toggle && (
        <>
          <S.MainBox>
            <S.InputBox>
              <S.Icon style={{ marginRight: '10px' }}>{SearchSVG({ stroke: '#999' })}</S.Icon>
              <S.Input placeholder='제목를 입력하세요.' onChange={(e) => handleChange(e)} />
            </S.InputBox>
          </S.MainBox>
        </>
      )}
      {isMenuOpen && (
        <S.Box>
          <S.Icon onClick={() => setIsMenuOpen(false)} style={{ padding: '20px' }}>
            {CloseSVG({ size: '24', stroke: '#fff' })}
          </S.Icon>
        </S.Box>
      )}
    </S.Wrapper>
  );
};

export default NavBar;
