import React from 'react';
import {connect} from 'react-redux';
import store from '../../stores/store';
import {loadMovies, filterByGenre} from '../../actions/MovieActionCreators';
import MovieLayout from '../layout/MovieLayout';
import { movieList } from './Movies';
import 'normalize.css/normalize.css';

class MovieContainer extends React.Component {

  componentDidMount() {
    store.dispatch(loadMovies(movieList));
  }

  filterByGenre(genre) {
    store.dispatch(filterByGenre(genre));
  }

  render() {
    return (
      <MovieLayout
        movies={this.props.movies}
        genres={this.props.category}
        filterByGenre={this.filterByGenre}
        {...this.props}>
      </MovieLayout>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    movies: store.moviesState.movies,
    category: store.moviesState.genres
  };
};

export default connect(mapStateToProps)(MovieContainer);
