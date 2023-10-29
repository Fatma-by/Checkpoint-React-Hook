// Filter.js
import React from 'react';

function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => onRatingChange(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
