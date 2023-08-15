import React from 'react';

// This component renders a card for a movie with its title, poster image, rating, and overview
const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      {/* Display the movie poster */}
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        {/* Display the movie title */}
        <h3>{title}</h3>
        {/* Display the movie rating */}
        <span className="rating">{rating}</span>
      </div>
      <div className="movie-overview">
        {/* Display the movie title */}
        <h3>{title}</h3>
        {/* Display the movie description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;