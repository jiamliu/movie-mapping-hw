import Genre from "./Genre"

const Movie = (props) => {

  return (
    <div className="poster">
      <img src={props.movie.poster_path} alt="poster" />
      <h2>{props.movie.title}</h2>
      <h5>Release Date: {props.movie.release_date}</h5>
      <p>{props.movie.overview}</p>
      <div className="genres">
        {props.movie.genres.map((genre) => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  )
}

export default Movie
