import {  useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

export default function AdminPanel() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to users by default
    if (window.location.pathname === '/admin') {
      navigate('/admin/users');
    }
  }, [navigate]);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}