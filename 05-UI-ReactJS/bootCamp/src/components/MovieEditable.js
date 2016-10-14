import React, { Component } from 'react';

import '../styles/MovieEditable.css';

class MovieEditable extends Component {

  constructor(props, state){
    super(props, state);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDirectorChange = this.handleDirectorChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      "disable":true,
      "title": this.props.title,
      "director":this.props.director
    };
  }

  handleTitleChange(event){
    this.setState({"title":event.target.value});
  }

  handleDirectorChange(event){
    this.setState({"director":event.target.value});
  }
  handleClick(event){
      this.setState({"disable":!this.state.disable});
  }
  render(){
    return(
        <div className="MovieEditable">
          <span> TITLE  </span>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            disabled={this.state.disable}/>
            <br />
          <span> DIRECTOR  </span>
          <input
            type="text"
            value={this.state.director}
            onChange={this.handleDirectorChange}
            disabled={this.state.disable}/>
            <br />
            <div className="edit">
              <span> edit? </span>
              <input
                type="checkbox"
                onClick={this.handleClick}
                value={this.state.disable}/>
                <br />
            </div>
        </div>
    )
  }
}

export default MovieEditable;
