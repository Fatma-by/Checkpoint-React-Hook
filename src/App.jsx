// App.js
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import AddMovie from "./component/AddNewMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    // Initialize with some sample movies
    {
      title: "Geostorm",
      description: "Geostorm is a 2017 American science-fiction action film",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Geostorm_official_teaser_poster.jpg",
      rating: 4,
    },
    {
      title: "Greenland",
      description:
        "A family fights for survival as a planet-killing comet races toward Earth",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VeivXbHpw-IDwoCdBGKKHTt_gcypXA06vQ&usqp=CAU",
      rating: 3,
    },
    {
      title: "Hunter Killer",
      description: "Hunter Killer is a 2018 American action thriller film",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdSQDsrBcCIU7muyInTsK19SznHwu2Rd8Jw&usqp=CAU",
      rating: 4,
    },

    // Add more movies here
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const isTitleMatch = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const isRatingMatch = filterRating === 0 || movie.rating >= filterRating;

    return isTitleMatch && isRatingMatch;
  });

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />

      <MovieList movies={filteredMovies} />

      <AddMovie onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
