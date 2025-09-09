import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      style={{
        padding: '12px 20px',
        backgroundColor: '#0b1220',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{ color: '#fff', textDecoration: 'none', fontWeight: '700', fontSize: '1.2rem' }}
        >
          영화
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;