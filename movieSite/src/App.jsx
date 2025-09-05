import "./App.css";
import MovieCard from "./components/MovieCard"
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import moviesData from "./data/movieListData.json";
import NavBar from "./components/Layout";

 function App() {
  const [movies] = useState(moviesData.results);

    return (
        <>       
        <NavBar/>
     <main className="">
      <h1 className="text-2xl">Movie List</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {movies.map((movie) =>(
        <section className="" key={movie.id}>          
          <MovieCard 
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
           />
           
        </section>
      ))}
      </div>
    </main>
    </>
    )
}



export default App;