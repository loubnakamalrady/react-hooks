import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePosterURLChange = (event) => {
    setPosterURL(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleTrailerLinkChange = (event) => {
    setTrailerLink(event.target.value);
  };

  const handleAddMovie = () => {
    const movie = {
      title,
      description,
      posterURL,
      rating: Number(rating),
      trailerLink,
    };
    onAddMovie(movie);
    // Reset the form fields after adding the movie
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerLink('');
  };

  return (
    <div className="movie-form">
      {/* Input fields for movie details */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={handlePosterURLChange}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <input
        type="text"
        placeholder="Trailer Link"
        value={trailerLink}
        onChange={handleTrailerLinkChange}
      />
      {/* Button to add the movie */}
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieForm;