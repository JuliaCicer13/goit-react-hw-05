import MovieList from '../components/MovieList';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const movies = getMovies();
  return (
    <main>
      <h1>Welcome to the main page</h1>
      <MovieList movies={movies} />
       <button onClick={() => navigate("/movies")}>MoviesPage</button>
    </main>
  );
}
