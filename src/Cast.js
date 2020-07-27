import React, { Component } from "react";

import fallback from "./fallback.svg";
import arrow from "./arrow.svg";
import "./Cast.css";
class Cast extends Component {
  constructor(props){
    super(props)
    
    this.addDefaultSrc = this.addDefaultSrc.bind(this)
  }
  addDefaultSrc(e){
    e.target.src = fallback
    e.target.className ="cast-fallback"
  }
  render() {
    return (
      <div className="Cast">
        <div className="cast-title">
          <p>Cast</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="cards">
          {this.props.casts.map((cast) => (
            <div className="cast-card" key={cast.credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                className="cast-img"
                alt="cast"
                onError={this.addDefaultSrc}
              />

             

              <div className="cast-info">
                <p>{cast.name}</p>
                <p className="cast-char">{cast.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cast;
