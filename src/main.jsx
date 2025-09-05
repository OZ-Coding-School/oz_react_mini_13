import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../pages/App";
import MovieDetail from "../pages/MovieDetail";
import "../index.css";
import SearchPage from "../pages/SearchPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="details/:id" element={<MovieDetail />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
