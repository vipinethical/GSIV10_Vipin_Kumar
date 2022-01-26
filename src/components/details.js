import React from "react";
import "./details.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="top_bar">
        <h5>Movie Details</h5>
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
      <div className="movie_details">
        <div className="poster"></div>
        <div className="details">
          <h5 style={{ lineHeight: 0, margin: "8px 0px 12px 0px" }}>
            Movie Title
            <span
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 15,
                color: "#9b9b9b",
              }}
            >
              (Rating)
            </span>
          </h5>
          <h6 style={{ lineHeight: 0, margin: "8px 0px 14px 0px" }}>
            Year | Length | Director
          </h6>
          <h6 style={{ lineHeight: 0, margin: "8px 0px 14px 0px" }}>
            Cast: Director 1, Director 2,..
          </h6>
          <h6 style={{ margin: "8px 0px 0px 0px" }}>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Details;
