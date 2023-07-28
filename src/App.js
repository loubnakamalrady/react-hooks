import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    // An array of movies with their properties
    movies: [
      {
        id: 1,
        title: 'The Purge',
        description: 'The members of a wealthy family find themselves in trouble when they are held hostage by a murderer during the Purge, a period where all criminal activity is legalised.',
        posterURL: './images/thepurge.jpeg',
        rating: 5.7
      },
      {
        id: 2,
        title: 'The Purge Anarchy',
        description: 'A group of people get stranded on the streets during the Purge, a period where all crimes are legal and emergency services are closed.',
        posterURL: './images/thepurgeanarchy.jpeg',
        rating: 6.4
      },
      {
        id: 3,
        title: 'The Purge: Election Year',
        description: 'Police Sergeant Leo Barnes is tasked with protecting the presidential candidate Charlie Roan after she is targeted for death on Purge night.',
        posterURL: './images/electionyear.jpeg',
        rating: 6
      },
      {
        id: 4,
        title: 'The First Purge',
        description: 'The New Founding Fathers of America decides to test a sociological theory that aims at reducing crime rates. However, things get out of hand when two rival groups face each other.',
        posterURL: './images/thefirstpurge.jpeg',
        rating: 5.2
      },
      {
        id: 5,
        title: 'The Forever Purge',
        description: 'Adela and her husband, Juan, live in Texas, where he works as a ranch hand for the wealthy Tucker family. Juan impresses the Tucker patriarch, Caleb, but that fuels the jealous anger of his son, Dylan. On the morning after the Purge, a masked gang of killers attacks the Tuckers, forcing both families to band together and fight back as the country spirals into chaos.',
        posterURL: './images/theforeverpurge.jpeg',
        rating: 5.4
      }
    ],
    // An object representing the filter settings for the movies
    filter: {
      title: '',
      rate: 0
    },
    // An object representing the state for adding a new movie
    newMovie: {
      title: '',
      description: '',
      posterURL: '',
      rating: 0
    }
  }

  // This method updates the 'title' property of the 'filter' object 
  // in state based on the user input in the filter form
  handleTitleChange = event => {
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        title: event.target.value
      }
    }));
  }

  // This method updates the 'rate' property of the 'filter' object 
  // in state based on the user input in the filter form
  handleRateChange = event => {
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        rate: event.target.value
      }
    }));
  }

  // This method updates the state with the new movie information 
  // as the user types in the form
  handleNewMovieChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newMovie: {
        ...prevState.newMovie,
        [name]: value
      }
    }));
  }

  // This method adds a new movie to the 'movies' array in state when 
  // the form is submitted, and resets the 'newMovie' in state
  handleNewMovieSubmit = event => {
    event.preventDefault();
    const { movies, newMovie } = this.state;
    // Each movie is given a unique 'id' based on the length of the 'movies' 
    // array +1
    const id = movies.length + 1;
    const movie = { id, ...newMovie };
    this.setState(prevState => ({
      movies: [...prevState.movies, movie],
      newMovie: {
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      }
    }));
  }

  render() {
    const { movies, filter, newMovie } = this.state;

    // The 'filteredMovies' array is created by filtering the 'movies' 
    // array in state based on the 'filter' object
    const filteredMovies = movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rate
      );
    });

    // This component renders the filter form, the movie list component with the 
    //'filteredMovies' array, and the form for adding a new movie
    return (
      <div className="app">
        <Filter
          title={filter.title}
          rate={filter.rate}
          onTitleChange={this.handleTitleChange}
          onRateChange={this.handleRateChange}
        />
        <MovieList movies={filteredMovies} />
        <form onSubmit={this.handleNewMovieSubmit}>
          <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={this.handleNewMovieChange} />
          <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={this.handleNewMovieChange} />
          <input type="url" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={this.handleNewMovieChange} />
          <input type="number" name="rating" placeholder="Rating" min="0" max="10" value={newMovie.rating} onChange={this.handleNewMovieChange} />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default App;