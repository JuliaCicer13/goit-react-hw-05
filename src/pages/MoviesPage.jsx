import { MovieList } from '../components/MovieList';
import { getMovies } from '../fakeApi';

export default function MoviesPage() {
  const movies = getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
