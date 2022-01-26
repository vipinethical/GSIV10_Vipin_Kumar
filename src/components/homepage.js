import React, { useEffect, useState } from "react";
import "./list.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import Card from "./card";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "ad32153cee44cfb3dd623824f70cc4e5";
const Homepage = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        // `https://api.themoviedb.org/3/movie/438695?api_key=${API_KEY}&language=en-US`
      );
      console.log(props);
      // const id = props.location.id;
      // history.push(`/details/${card}`)

      console.log(res.data);
      setMovies(res.data.results);
    }
    getData();
  }, []);
  return (
    <div>
      <div className="Searchheader">
        <SearchIcon
          sx={{
            fontSize: 35,
            color: "#9B9B9B",
            backgroundColor: "#d8d8d8",
            borderRadius: "8px 0px 0px 8px",
            padding: "4.5px",
            cursor: "pointer",
          }}
        />
        <input className="Searchbar" placeholder="Search" />
        <Link to="/">
          <HomeIcon
            sx={{
              fontSize: 35,
              padding: "4.5px",
              cursor: "pointer",
              position: "relative",
              color: "black",
            }}
          />
        </Link>
      </div>

      <div className="card-box">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Card key={movie.id} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
