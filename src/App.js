import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import Filter from './Filter';
import MovieForm from './MovieForm';

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filterMovies = (title, rating) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= rating)
      );
    });
    setMovies(filteredMovies);
  };

  return (
    <Router>
      <div className="app">
        <h1>Movie Library</h1>
        <Switch>
          <Route exact path="/">
            {/* Filter component to filter movies */}
            <Filter onFilter={filterMovies} />
            {/* MovieList component to display the list of movies */}
            <MovieList movies={movies} />
            <h2>Add a New Movie</h2>
            {/* MovieForm component to add a new movie */}
            <MovieForm onAddMovie={addMovie} />
          </Route>
          <Route path="/movies/:title">
            {/* MovieDescription component to display the description of a specific movie */}
            <MovieDescription movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;