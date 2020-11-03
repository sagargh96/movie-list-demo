import React from 'react';
import MovieFilter from '../views/MovieFilter';
import MovieList from '../views/MovieList';
import { AppBar } from 'material-ui';
import { Container, Row, Col } from 'react-bootstrap';

import './MovieLayout.scss';

class MovieLayout extends React.Component {
  render() {
    return (
      <div className='MovieLayout'>
          <AppBar title="Movie List" />
          <Container>
            <Row>
              <MovieFilter genres={this.props.genres} filterByGenre={this.props.filterByGenre}/>
            </Row>
            <Row>
              <MovieList movies={this.props.movies}/>
            </Row>
          </Container>
      </div>
    );
  }
}

export default MovieLayout;
