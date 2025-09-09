import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import NavBar from "./components/NavBar";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} /> {/* ✅ 등록 */}
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}
