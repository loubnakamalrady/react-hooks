import React from 'react';

// This component renders a filter form with a text input for filtering by 
// title and a number input for filtering by rating
const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by title" value={title} onChange={onTitleChange} />
      <input type="number" placeholder="Filter by rating" min="0" max="10" value={rate} onChange={onRateChange} />
    </div>
  );
};

export default Filter;