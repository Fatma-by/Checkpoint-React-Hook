// Body.js
import React from 'react';
import Annonce from './component/Annonce';
import {   Routes, Route } from 'react-router-dom';
import MovieList from './component/MovieList';

function Body(props) {
  return (
      <Routes>
        <Route path="/annonce" element={<Annonce />} />
        {/* Add more routes as needed */}
        <Route path="/" element={<MovieList movies={props.movies} />} />


      </Routes>
  );
}

export default Body;
