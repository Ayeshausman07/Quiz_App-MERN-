// components/Footer.jsx
import { FaGithub, FaTwitter, FaLinkedin, FaCode, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FaCode className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                <span className="text-red-600">Quiz</span>Code
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Test your coding knowledge and improve your skills with our interactive quizzes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  Topics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  My Results
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-red-600 text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mt-4 text-gray-500 text-sm">
              Subscribe to get updates on new quizzes and features.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 rounded-l-md text-sm w-full focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} QuizCode. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-gray-500 text-sm flex items-center">
                Made with <FaHeart className="mx-1 text-red-600" /> by Ayesha Usman
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}