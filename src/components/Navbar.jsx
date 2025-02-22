import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed w-full z-10 bg-black bg-opacity-80 p-4 flex justify-between items-center">
    <Link to="/" className="text-red-600 text-3xl font-bold">Netflix</Link>
    <div className="space-x-4">
      <Link to="/login" className="text-white">Login</Link>
      <Link to="/signup" className="bg-red-600 text-white px-4 py-2 rounded">Sign Up</Link>
    </div>
  </nav>
);

export default Navbar;
