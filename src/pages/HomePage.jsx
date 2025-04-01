import { MovieList } from '../components/MovieList';
import { getMovies } from '../fakeApi';

export default function HomePage() {
  const movies = getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
