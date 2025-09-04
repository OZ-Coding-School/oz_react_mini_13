import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#222', color: '#fff' }}>
        <h1>My Movie App</h1>
        <nav>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>{children}</main>
    </div>
  );
}

export default Layout;
