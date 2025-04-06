import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import axios from 'axios';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';
const query = 'Lord of the rings';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
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
  }, []);
  
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
