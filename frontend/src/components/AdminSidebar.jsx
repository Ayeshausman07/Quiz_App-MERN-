import { NavLink, useNavigate } from 'react-router-dom';
import { 
  FiUsers, 
  FiBook, 
  FiBarChart2, 
  FiLogOut, 
  FiHome, 
  FiSettings,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { useState } from 'react';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-red-600 text-white focus:outline-none"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col`}>
        {/* Logo/Brand Section */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
              <FiBarChart2 className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">QuizMaster Admin</h2>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <FiX className="text-gray-500" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <NavLink 
            to="/admin/dashboard" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-red-50 text-red-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiHome className="text-lg" />
            Dashboard
          </NavLink>

          <NavLink 
            to="/admin/users" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-red-50 text-red-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiUsers className="text-lg" />
            User Management
          </NavLink>

          <NavLink 
            to="/admin/questions" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-red-50 text-red-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiBook className="text-lg" />
            Question Bank
          </NavLink>

          <NavLink 
            to="/admin/results" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-red-50 text-red-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiBarChart2 className="text-lg" />
            Quiz Analytics
          </NavLink>

          {/* <NavLink 
            to="/admin/settings" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-red-50 text-red-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiSettings className="text-lg" />
            System Settings
          </NavLink> */}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}