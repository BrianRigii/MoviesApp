import React, { Component } from "react";
import axios from "axios";

import Cast from "./Cast";
import "./ShowDetail.css";
import API_KEY from "./Keys";

class ShowDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
    };
    this.getCast = this.getCast.bind(this);
  }

  async getCast() {
    var resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.MOVIE_ID}/credits?api_key=${API_KEY}`
    );
    this.setState({
      cast: [...resp.data.cast],
    });
  }

  componentDidMount() {
    this.getCast();
  }

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
            <h5 className="storyline">Storyline</h5>
            <p>{this.props.overview}</p>
            <div className="extraDetail">
              <div className="air">
                <h6>Released</h6>
                <p>{this.props.releaseDate}</p>
              </div>
              <div className="status">
                <h6>Status &nbsp;&nbsp;&nbsp;&nbsp;</h6>
                <p>{this.props.status}</p>
              </div>
              <div className="genres">
                <h6>Genres&nbsp;&nbsp;&nbsp;</h6>
                <div className="genre-list">
                  <p>
                    {this.props.genres.map((e) => {
                      return <span key={e.id}>{e.name}</span>;
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cast casts={this.state.cast} />
      </div>
    );
  }
}

export default ShowDetail;
