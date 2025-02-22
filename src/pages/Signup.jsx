import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, password); // Handle API request here
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSignUp}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-sm text-white"
      >
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
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
          className="w-full bg-red-600 p-3 rounded text-lg font-semibold"
        >
          Create Account
        </button>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
