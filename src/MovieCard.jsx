import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`movie ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
        />
      </div>
      <div>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
