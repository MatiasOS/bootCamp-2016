import React, { Component } from 'react';

import '../styles/Movie.css';

class Movie extends Component {

  constructor(pros, state){
    super(pros, state);
    this.handlePlay=this.handlePlay.bind(this);
    this.handleStop=this.handleStop.bind(this);
  }

  handlePlay(){
    console.log("Playing " + this.props.title + " of " + this.props.director);
  }

  handleStop(){
    console.log(this.props.title + " stopped");
  }
  render(){
    return(
        <div className="Movie">
          <span> Titulo: {this.props.title} </span> <br />
          <span> Director: {this.props.director} </span> <br />
          <button> Play </button> <button> Stop </button>
        </div>
    )
  }
}

export default Movie;
