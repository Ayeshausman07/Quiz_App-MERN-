import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import About from './pages/About';
import AdminUsers from './pages/AdminUsers';
import AdminQuestions from './pages/AdminQuestions';
import AdminResults from './pages/AdminResults';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (no Navbar) */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
       

        {/* Protected User Routes (with Navbar) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <WithNavbar>
                <Dashboard />
              </WithNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <WithNavbar>
                <Profile />
              </WithNavbar>
            </ProtectedRoute>
          }
        />

         <Route 
         path="/about"
          element={ 
          <ProtectedRoute>
              <WithNavbar>
                <About /> 
                </WithNavbar>
                 </ProtectedRoute>
                }
                 />


        {/* Admin Routes (with AdminSidebar) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminPanel />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminUsers />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="questions" element={<AdminQuestions />} />
          <Route path="results" element={<AdminResults />} />
                <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

// Helper component to wrap routes that need Navbar
function WithNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}