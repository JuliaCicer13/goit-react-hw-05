import { useParams, useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from "../components/styles/MoviesCast.module.css"
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

    const options = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(url, options)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <section>
      <h2 className={css.titleCast}>Actors cast</h2>
      <ul className={css.styleCast}>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
      <button onClick={() => navigate(location.state?.form ?? "/movies")}>
        Go back
      </button>
    </section>
  );
}