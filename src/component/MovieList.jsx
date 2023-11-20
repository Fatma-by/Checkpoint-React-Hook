// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import AddMovie from "./AddNewMovie";
import "./MovieList.css";

function MovieList(props) {
  return (
    <>
      {" "}
      <h1>Movie Library</h1>
      <Filter movies={props.movies} />
      
      <div className="movie-list">
        {props.movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <AddMovie />
    </>
  );
}

export default MovieList;
