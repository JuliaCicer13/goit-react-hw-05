import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import axios from 'axios';
import { useSearchParams, } from 'react-router-dom';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

    const options = {
      headers: {
        // Замість api_read_access_token вставте свій токен
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(url, options)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.query.value.trim();

    if (searchValue) {
      setSearchParams({ query: searchValue });
    } else {
      setSearchParams({});
      setMovies([]);
    }
    form.reset();
  };
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
     {movies.length > 0 && <MovieList movies={movies} /> } 
    </main>
  );
}
