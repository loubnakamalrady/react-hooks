import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    // If the movie is not found, display a message
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-description">
      {/* Display the movie title */}
      <h2>{movie.title}</h2>
      {/* Display the movie description */}
      <p>{movie.description}</p>
      <div className="embed-video">
        {/* Display the movie trailer using an iframe */}
        <iframe
          src={movie.trailerLink}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      </div>
      {/* Link to go back to the home page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;