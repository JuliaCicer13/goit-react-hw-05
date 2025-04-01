import css from './App.module.css';
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailPage";
import MoviesPage from "./pages/MoviesPage";
import MovieCast from "./pages/MovieCast";
import MovieReviews from "./pages/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage"

export default function App() {

  /* Остальной код */
  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

  