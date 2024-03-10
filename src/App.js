import React from "react"
import movieArray from "./data/movies.json"
import Movie from "./components/Movie"
import Genre from "./components/Genre"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      {movieArray.map((movie, index) => (
        <div key={index} className="movie-wrapper">
          <Movie
            key={index}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            image={movie.image}
            genres={movie.genres}
          />
          <div className="genres-wrapper">
            {movie.genres.map((genre, index) => (
              <Genre key={index} genre={genre} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App