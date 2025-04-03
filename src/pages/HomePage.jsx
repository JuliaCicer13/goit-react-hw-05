import MovieList from '../components/MovieList';

export default function HomePage() {
  const movies = getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
