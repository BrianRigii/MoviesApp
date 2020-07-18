import React, { Component } from 'react'
import axios from "axios"

import Show from "./Show"
import ShowDetail from "./ShowDetail"


import API_KEY from "./Keys"
import "./MoviePage.css"




class MoviePage extends Component {
    
    constructor(props){
        super(props)
        
        this.state={
            MovieData : {
                backdrop_path : "",
                poster_path :" "

            },
            dates :{
                year :0
            }
            
        }
        this.getMovieData = this.getMovieData.bind(this)
    }
   
    async getMovieData(){
        var MOVIE_ID = 475557;
        var Moviedata = await axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`)

       this.setState({
           MovieData : Moviedata.data,
           dates:{
               year : Moviedata.data.release_date.split("-")
           }
       })
      
    }

    componentDidMount(){
        this.getMovieData()
    }





    render() {
        var {MovieData ,dates} = this.state
        return (
            <div className="MoviePage">
                <Show title={MovieData.original_title} backdrop={MovieData.backdrop_path} overview = {MovieData.overview} votes={MovieData.vote_count} year ={dates.year[0]} runtime= {MovieData.runtime}/>
                <ShowDetail poster={MovieData.poster_path} overview = {MovieData.overview}/>
            </div>
        )
    }
}

export default MoviePage
