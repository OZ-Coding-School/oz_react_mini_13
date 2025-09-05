import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    // 전체 배경을 'bg-slate-900'으로 변경합니다.
    <div className="bg-slate-900 min-h-screen">
      <NavBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;