import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const Logout = () => {
  const [authuser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authuser,
        user: null
      });
      localStorage.removeItem('user');
      toast.success('Logged Out successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Delay to allow the toast to display
    } catch (error) {
      toast.error("Error: " + error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div>
      <button className="bg-red-700 text-white px-3 py-2 rounded-lg hover:bg-red-800" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;
