import React, { Component } from 'react';
// import Movie from './Movie';
import MovieEditable from './MovieEditable';
import '../styles/MovieList.css'


class MovieList extends Component {

  render(){
    return(
        <div className="MovieList">
          {
            this.props.data.map(function(d,i){
              return <MovieEditable title={d.title} director={d.director} disable={false}/>
            })
          }
        </div>
    )
  }
}

export default MovieList;
