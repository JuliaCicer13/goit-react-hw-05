import  MovieList  from '../components/MovieList';

export default function MoviesPage() {
  const movies = getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
