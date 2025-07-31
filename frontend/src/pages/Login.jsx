import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';

import API from "../utils/axios";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // 🔴 loading state

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    setError(""); // clear previous error
    try {
      const res = await API.post("/auth/login", form);
      const { token, ...user } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      if (user.role === "admin") {
        navigate("/admin", { state: { message: "Welcome Admin!" } });
      } else {
        navigate("/", { state: { message: "Logged in successfully!" } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
     <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side - Welcome Section with Game GIF */}
      <div className="w-full md:w-1/2 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://cdn.dribbble.com/userupload/26777712/file/original-2870e3fc3e331bdaa1ee07e0a2482a5a.gif')] bg-cover bg-center"
          style={{ backgroundSize: "cover" }}
        ></div>
       <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-12 text-white">
  {/* Glowing background effect */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 opacity-80 rounded-xl blur-xl -z-10"></div> */}
  
  {/* Content with enhanced brightness and contrast */}
  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
    Welcome to
  </h1>
  <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
    QUIZ APP
  </h2>
  <p className="text-2xl md:text-3xl mb-8 font-medium text-white/90">
    The ultimate quiz experience
  </p>
  <p className="text-xl font-light text-white/80">
    Created by Ayesha Usman
  </p>
  
  {/* Brighter, more vibrant emoji badges */}
  <div className="mt-10 flex space-x-5">
    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
      <span className="text-2xl">🎮</span>
    </div>
    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
      <span className="text-2xl">🏆</span>
    </div>
    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
      <span className="text-2xl">✨</span>
    </div>
  </div>
</div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Login to continue your quiz journey</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-red-600 focus:outline-none transition"
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:text-red-800 hover:underline transition"
              >
                Forgot password?
              </Link>
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
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-red-600 hover:text-red-800 hover:underline transition"
              >
                Create one now
              </Link>
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-xs text-gray-500">
              By logging in, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}