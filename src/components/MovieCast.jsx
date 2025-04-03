import { useParams } from "react-router-dom"

export default function MovieCast() {
    const { movieId } = useParams();
    return (
        <>
            <h2>Cast for Movies ID: {movieId}</h2>
            <p>Here will be cast details...</p>
        </>
    )
}