import React from "react";
import "./card.css";
const imgpath = "http://www.foxmovies.com/movies/fight-club";
export default function Card({
  original_title,
  vote_average,
  overview,
  poster_path,
}) {
  return (
    <div className="card">
      <div className="movie_img">
        <img
          src={`https://www.themoviedb.org/t/p/original/${poster_path}`}
          className="img_poster"
        ></img>
      </div>
      <div className="movie_descrip">
        <div className="title">
          <p className="text-heading">{original_title}</p>
          <p className="rating">({vote_average})</p>
        </div>
        <div className="despcription">
          <p className="text-despcription">{overview}</p>
        </div>
      </div>
    </div>
  );
}
