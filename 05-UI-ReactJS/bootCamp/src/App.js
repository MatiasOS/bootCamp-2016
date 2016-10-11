import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Movie title="Brazil"/>
        <Movie title="The Zero Theorem"/>
        <Movie title="The Window"/>
      </div>
    );
  }
}

export default App;
