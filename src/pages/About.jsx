import styles from './About.module.css'
import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1>About pages</h1>
            <ul>
                <li>
                    <Link to="mission">Read about our mission</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}