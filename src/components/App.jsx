import css from './App.module.css';
import { Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage"

export default function App() {

  /* Остальной код */
  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

  