import React from "react"

const Movie = ({ title, release_date, overview, image, genres }) => {
  return (
    <div className="movie">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>{overview}</p>
      <div className="genres">
        {genres.map((genre, index) => (
          <span key={index} className="genre">{genre}</span>
        ))}
      </div>
    </div>
  )
}

export default Movie
