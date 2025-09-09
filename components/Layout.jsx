import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <NavBar query={query} setQuery={setQuery} />
      <main className="max-w-7xl mx-auto">
        <Outlet context={{ setQuery }} />
      </main>
    </div>
  );
};

export default Layout;
