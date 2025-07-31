import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaSpinner } from 'react-icons/fa';

import API from "../utils/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await API.post('/auth/forgot-password', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error sending email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side - Motivational Section with Game GIF */}
      <div className="w-full md:w-1/2 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://cdn.dribbble.com/userupload/26777712/file/original-2870e3fc3e331bdaa1ee07e0a2482a5a.gif')] bg-cover bg-center"
          style={{ backgroundSize: "cover" }}
        ></div>
        <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Reset Your
          </h1>
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
            PASSWORD
          </h2>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-white/90">
            Get back to your quiz journey
          </p>
          
          <div className="mt-10 flex space-x-5">
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-2xl">🔑</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-2xl">✉️</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-red-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-red-600 mb-2">Forgot Password?</h2>
            <p className="text-gray-600">Enter your email to receive a reset link</p>
          </div>

          {message && (
            <div className={`mb-6 p-3 rounded-lg text-center ${
              message.toLowerCase().includes('sent') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 text-white mr-2" />
                  Sending Link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Remember your password?{" "}
              <Link
                to="/login"
                className="font-medium text-red-600 hover:text-red-800 hover:underline transition"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-xs text-gray-500">
              The link will expire in 1 hour for security reasons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}