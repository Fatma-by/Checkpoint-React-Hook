// MovieCard.js
import React from "react";
import { useCallback } from "react";
import {useNavigate }  from "react-router-dom";

function MovieCard({ title, description, posterURL, rating,annonceURL }) {
  const push = useNavigate();
  const HandleClick = useCallback(() => {
    
    push("/annonce?annonce="+annonceURL);
  }, []);

  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} Poster`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <button onClick={HandleClick}>Annonce</button>
    </div>
  );
}

export default MovieCard;
