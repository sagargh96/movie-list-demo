// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './stores/store';
import MovieContainer from './components/containers/MovieContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <MovieContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'));
