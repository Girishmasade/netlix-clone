const HeroBanner = ({ movie }) => (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${movie?.backdrop_path})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80" />
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-5xl font-bold">{movie?.title}</h1>
        <p className="w-1/2 my-4">{movie?.overview}</p>
        <button className="bg-red-600 px-6 py-2 rounded text-lg font-semibold">Play</button>
      </div>
    </div>
  );
  
  export default HeroBanner;
  