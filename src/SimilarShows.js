import React, { Component } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

import API_KEY from "./Keys";
import "./SimilarShow.css";
import arrow from "./arrow.svg";

class SimilarShows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      similarShows: [],
    };

    this.getSimilarShows = this.getSimilarShows.bind(this);
  }

  async getSimilarShows() {
    var currMovie = this.props.show;
    var showList = await axios.get(
      `https://api.themoviedb.org/3/movie/${currMovie}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log(showList.data);

    this.setState({ similarShows: [...showList.data.results] });
  }
  componentDidMount() {
    this.getSimilarShows();
  }
  render() {
    return (
      <div className="similarShows">
        <div className="Heading">
          <p className="title">More Like This</p>
          <img src={arrow} alt=""></img>
        </div>

        <div className="Show-list">
          {this.state.similarShows !== [] &&
            this.state.similarShows.map((show) => (
              <div className="Show-card" key={show.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                  alt={show.original_title}
                />
                <div className="show-info">
                <p className="show-title">{show.original_title}</p>
                <div className="rates">
                <ReactStars
                  count={5}
                  onChange={this.ratingChanged}
                  size={18}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="red"
                  value={3}
                  color="#999999"
                  edit={false}
                />
                <p>{show.vote_average}</p>
                </div>
               
                </div>
                
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default SimilarShows;
