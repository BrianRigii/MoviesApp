import React, { Component } from "react";
import axios from "axios";

import Show from "./Show";
import ShowDetail from "./ShowDetail";
import SimilarShows from "./SimilarShows"

import API_KEY from "./Keys";
import "./MoviePage.css";

class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MovieData: {
        backdrop_path: "",
        poster_path: " ",
      },
      dates: {
        year: 0,
      },
      vote_average: 0,
      numStars: 0,
      MOVIE_ID: 531876,
    };
    this.getMovieData = this.getMovieData.bind(this);
    this.starValue = this.starValue.bind(this);
  }

  async getMovieData() {
    var MOVIE_ID = this.state.MOVIE_ID;
    var Moviedata = await axios.get(
      `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`
    );

    this.setState({
      MovieData: Moviedata.data,
      dates: {
        year: Moviedata.data.release_date.split("-"),
      },
    });

    this.setState(
      {
        vote_average: Moviedata.data.vote_average,
      },
      () => {
        this.state.vote_average !== 0 && this.starValue();
      }
    );
  }

  starValue() {
    var x = this.state.vote_average / 2;
    var roundNum = (Math.round(x * 2) / 2).toFixed(1);
    this.setState({ numStars: roundNum });
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    var { MovieData, dates, numStars, MOVIE_ID } = this.state;
    return (
      <div className="MoviePage">
        {numStars !== 0 && (
          <Show
            title={MovieData.original_title}
            backdrop={MovieData.backdrop_path}
            overview={MovieData.overview}
            votes={MovieData.vote_count}
            year={dates.year[0]}
            runtime={MovieData.runtime}
            numStars={numStars}
          />
        )}

       
        {MovieData.genres !== undefined && (
          <ShowDetail
            poster={MovieData.poster_path}
            overview={MovieData.overview}
            MOVIE_ID={MOVIE_ID}
            releaseDate={MovieData.release_date}
            status={MovieData.status}
            genres={MovieData.genres}
          />
        )}
        <SimilarShows show = {MOVIE_ID}/>
      </div>
    );
  }
}

export default MoviePage;
