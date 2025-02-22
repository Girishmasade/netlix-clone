import MovieCard from './MovieCard';
import { motion } from 'framer-motion';

const MovieRow = ({ title, movies }) => (
  <div className="my-8">
    <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
    <motion.div
      className="flex space-x-4 overflow-x-scroll scrollbar-hide"
      whileTap={{ cursor: 'grabbing' }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </motion.div>
  </div>
);

export default MovieRow;
