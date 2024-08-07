import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Courses from "./Courses/Courses";
import { useAuth } from "./context/AuthProvider";
import Signup from "./components/Signup";
import About from "./components/About";

const App = () => {
  const [authuser, setauthuser] = useAuth();
  console.log(authuser)
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/course" element={authuser?<Courses/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
      <ToastContainer />
      
     </div>
    </>
  );
};

export default App;
