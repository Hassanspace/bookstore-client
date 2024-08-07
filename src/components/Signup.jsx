import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";
import Login from "./Login";


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Account Created Successfully! Redirecting', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("user", JSON.stringify(res.data));

        setTimeout(() => {
          // Navigate to the courses page
          navigate("/course");
          // Reload the page
          window.location.reload();
        }, 2000); // Delay matches the toast's autoClose duration
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("" + err.response.data.msg, {
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
  };

  return (

    <>
    
      <div className="flex justify-center items-center">
        <div id="my_modal_2" className="modal-box dark:bg-slate-900 dark:text-white md:w-[600px] w-[400px] border md:ml-0">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-center">Sign up</h3>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="signup-name" className="text-sm">Name</label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your Name"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.fullname ? 'border-red-500' : ''}`}
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname.message}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="signup-email" className="text-sm">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your Email"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="signup-password" className="text-sm">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Password"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.password ? 'border-red-500' : ''}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              </div>
              <div className="flex md:flex-row flex-col justify-between items-center mt-6">
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                >
                  Sign Up
                </button>
                <div>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-700"
                  >
                    <a href="/">Log In</a>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Login />
    </>
  );
};

export default Signup;
