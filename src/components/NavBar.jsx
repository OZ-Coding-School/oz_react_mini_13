import React from 'react';
import { Link } from 'react-router-dom';

// NavBar 컴포넌트: 상단 네비게이션
const NavBar = () => {
  return (
    <nav
      style={{
        padding: '10px 20px',
        backgroundColor: '#222',
        color: '#fff',
      }}
    >
      <Link
        to="/"
        style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
      >
        
      </Link>
    </nav>
  );
};

export default NavBar;
