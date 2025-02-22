import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?${process.env.VITE_TMDB_API_KEY}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="text-white p-8">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-full max-w-md mx-auto"
      />
      <h1 className="text-4xl font-bold mt-6">{movie.title}</h1>
      <p className="my-4">{movie.overview}</p>
      <p>⭐ {movie.vote_average} / 10</p>
      <p>🕒 {movie.runtime} min</p>
    </div>
  );
};

export default MovieDetails;
