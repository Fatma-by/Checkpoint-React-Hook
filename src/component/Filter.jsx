// Filter.js
import React, { useState, useEffect } from "react";
import useMoviesStroe from "../moviesStore";

function Filter({ movies }) {
  const [setMovies] = useMoviesStroe((state) => [state.setMovies]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  function filter() {
    return movies.filter((movie) => {
      const isTitleMatch = movie.title
        .toLowerCase()
        .includes(filterTitle.toLowerCase());
      const isRatingMatch = filterRating === 0 || movie.rating >= filterRating;

      return isTitleMatch && isRatingMatch;
    });
  }

  useEffect(() => {
    if (filterTitle != "" || filterRating != 0) {
      const fildred = filter();
      setMovies(fildred);
    }
  }, [filterTitle, filterRating]);

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
