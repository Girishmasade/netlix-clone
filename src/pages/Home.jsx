import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((res) => setTrending(res.data.results));
  }, []);

  return (
    <>
      <Navbar />
      {trending[0] && <HeroBanner movie={trending[0]} />}
    </>
  );
};

export default Home;
