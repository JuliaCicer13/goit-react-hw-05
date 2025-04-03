import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import { move } from 'formik';

export default function MovieList ({ movies }) {
  return (
    <div className={css.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.moveWrapper}>
          <Link to={`/movies/${move.id}`}>
            <h3 className={css.movietName}>{movie.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
