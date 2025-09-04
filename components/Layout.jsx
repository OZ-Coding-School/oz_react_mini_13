import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
