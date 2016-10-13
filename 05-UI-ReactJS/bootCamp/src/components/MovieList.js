import React, { Component } from 'react';
import Movie from './Movie';

import '../styles/MovieList.css'


class MovieList extends Component {

  render(){
    return(
        <div className="MovieList">
          {
            this.props.data.map(function(d,i){
            return <Movie title={d.title} director={d.director} />
          }

          )}
        </div>
    )
  }
}

export default MovieList;
