import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-10">
        
        {/* 좌측: 로고 */}
        <Link to="/" className="text-purple-500 text-3xl font-extrabold flex items-center">
          <span className="text-white text-2xl font-bold mr-1">OZ</span>무비
        </Link>
        
        {/* 중앙: 검색바 */}
        <div className="flex-grow flex justify-center mx-4">
          <input
            type="text"
            placeholder=""
            className="w-1/2 px-4 py-2 rounded-full text-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        {/* 우측: 로그인 및 메뉴 버튼 */}
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
            로그인
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
            회원가입
          </button>
          <div className="text-white text-2xl cursor-pointer">
            &#8942; {/* 유니코드 세로 점 3개 */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;