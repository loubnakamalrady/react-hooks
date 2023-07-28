import React from 'react';

// This component renders a card for a movie with its title, 
// poster image, rating, and overview
const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="rating">{rating}</span>
      </div>
      <div className="movie-overview">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;