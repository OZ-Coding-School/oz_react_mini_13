import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList.jsx";
import MovieDetail from "./components/MovieDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
