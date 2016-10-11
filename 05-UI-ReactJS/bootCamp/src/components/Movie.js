import React, { Component } from 'react';

class Movie extends Component {

  render(){
    return(
        <div className="Movie">
          <span> Titulo : {this.props.title} </span> <br />
          <button> Play </button> <button> Stop </button>
        </div>    
    )
  }
}

export default Movie;
