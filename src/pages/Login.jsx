import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock login validation (replace with real API authentication)
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/'); // Redirect to homepage after successful login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-sm text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-800 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-gray-800 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-red-600 p-3 rounded text-lg font-semibold hover:bg-red-700 transition"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          New to Netflix?{' '}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
