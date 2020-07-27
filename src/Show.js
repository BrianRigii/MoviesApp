import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";

import "./Show.css";

class Show extends Component {
  constructor(props) {
    super(props);

    this.ratingChanged = this.ratingChanged.bind(this);
  }
  ratingChanged(newRating) {
    console.log(newRating);
  }
  render() {
    var runtime = this.props.runtime;
    var h = Math.floor(runtime / 60);
    var min = Math.floor((runtime / 60 - h) * 60);
  
    var X = this.props.overview
    var shortOverview = []
    var overview =""
    var dots ="..."
    var finalOverview = ""
    if(X!== undefined){
     var arr = X.split(' ')

     if (arr.length>25){
        var newX = arr.splice(0,25)
        shortOverview =[...newX]
        overview = shortOverview.join(" ")

        finalOverview = overview.concat(dots)
        

        
     }
    }

    


    return (
      <div
        className="Show"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.backdrop}`,
        }}
      >
        <div className="Show-content">
          <div className=" content">
            <div className="title">
              <h1>{this.props.title}</h1>
            </div>
            <div className="ratings">
              <div className="stars">
                
                <ReactStars
                  count={5}
                  onChange={this.ratingChanged}
                  size={22}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="red"
                  value={this.props.numStars!==0 ?  this.props.numStars : 3 }
                  color="#999999"
                />
                <p className="numratings">{this.props.votes} Reviews</p>
              </div>
              <div className ="moreinfo">
                <p className="year">{this.props.year}</p>
                <p className="runtime">{`${h}h ${min}min`}</p>
              </div>
            </div>
            <div className="overview">{finalOverview}</div>
            <div className="Show-btn">
              <button className="btn">Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
