import React, { Component } from "react";

import "./ShowDetail.css";

class ShowDetail extends Component {
  render() {
    return (
      <div className="ShowDetail">
        <div className="tab-btns">
          <button>Overview</button>
          <button>Videos</button>
          <button>Photos</button>
        </div>

        <div className="Overview-content">
          <div className="Poster">
            {this.props.poster !== "" && (
              <img
                src={`https://image.tmdb.org/t/p/original/${this.props.poster}`}
                alt="Movieposter"
              ></img>
            )}
          </div>
          <div className="Story">
            <p className="storyline">Storyline</p>
            <p>{this.props.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetail;
