import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {

  return (
    <div className="App">
      <h1>Michael's Movies</h1>
      <div className="movie-grid">
        {movieArray.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
