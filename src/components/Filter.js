import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFilter = () => {
    // Call the onFilter function with the title and rating values
    onFilter(title, rating);
  };

  return (
    <div className="filter">
      {/* Input field to filter movies by title */}
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      {/* Input field to filter movies by rating */}
```jsx
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
      {/* Button to apply the filter */}
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;