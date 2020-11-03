import React from 'react';
import { Dialog } from 'material-ui';
import './MovieList.scss';

export default class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      selectedMovie: null
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }
  openDialog = () => {
    this.setState({openDialog: true});
  }
  closeDialog = () => {
    this.setState({openDialog: false});
  }

  showDetail = (event, movie) => {
    this.setState({openDialog: true, selectedMovie: movie});
  }

  render() {
    const { selectedMovie } = this.state;
    return (
      <div className='MovieList'>
        {(() => {
          let movies = this.props.movies;
          if (movies) {
            let items = [];

            movies.map((movie, index) => {
              items.push(
              <div key={index} className="item-list">
                <button type="button" className="item btn btn-link" onClick={() => this.showDetail(event, movie)}>{movie.title}</button>
                <p>Top Cast: {movie.cast}</p>
                </div>
              );
            });

            return (
              <>
                <div className='list'>{items}</div>
                <Dialog open={this.state.openDialog} onRequestClose={this.closeDialog}>
                {selectedMovie ? (<><h1>{selectedMovie.title}</h1>
                  <h5>Cast: {selectedMovie.cast}</h5>
                  <p>Language: {selectedMovie.language}</p>
                  <p>Popularit:{selectedMovie.rating}</p></>) : null}
                </Dialog>
              </>
            );
          }
        })()}
      </div>
    );
  }
}
