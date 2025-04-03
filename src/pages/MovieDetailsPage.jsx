import { useParams } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";


export default function MovieDetailsPage() {
  const { id } = useParams();
  const details = getMoviesById(id);
  return (
    <main>
        <h2>
          Details - {details.name} - {id}
        </h2>
      <ul>
        <li>
          <Link to="cast">Read about our cast</Link>
        </li>
        <li>
          <Link to="reviews">Get to know the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
    
  )
}
