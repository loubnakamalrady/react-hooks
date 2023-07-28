import React from 'react';
import MovieCard from '../MovieCard';

// This component renders a list of movies by mapping array passed as props
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        // For each movie, a component is rendered and passed the object as props, and a unique 'key' prop based on its 'id'
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;