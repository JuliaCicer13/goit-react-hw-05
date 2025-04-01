import { Link } from 'react-router-dom';
import css from './MovietList.module.css';
import { move } from 'formik';

export const ProductList = ({ movies }) => {
  return (
    <div className={css.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.moveWrapper}>
          <Link to={`${move.id}`}>
            <h3 className={css.movietName}>{movie.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
