import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">mOvieZ</div>
      <div className="navbar-search">
        <input type="text" placeholder="검색..." />
      </div>
      
      <div className="navbar-auth">
        <button className="auth-button">로그인</button>
        <button className="auth-button">회원가입</button>
      </div>
    </nav>
  );
};

export default Navbar;