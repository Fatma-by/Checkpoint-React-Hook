// AddMovie.js
import React, { useState } from "react";
import useMoviesStroe from "../moviesStore";


const AddMovie = () => {
  const [movies, setMovies] = useMoviesStroe((state) => [
    state.movies,
    state.setMovies,
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
    const aux = movies;
    aux.push(newMovie);
    setMovies(aux);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
    });
  };

  return (
    <div className="add-movie">
      <h3>Add a New Movie</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
      />
      <input
        type="url"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={newMovie.rating}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
