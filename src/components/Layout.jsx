import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
