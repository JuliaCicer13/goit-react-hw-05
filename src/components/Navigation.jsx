import { NavLink } from "react-router-dom";
import css from "Navigation.module.css";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
<div>
     <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass} >
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass} >
          MovieDetails
        </NavLink>

  </nav>
</div>
  