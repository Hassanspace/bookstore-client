import React from "react";
import axios from "axios"; // Import axios
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Logged in successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(res.data)); // Store user data
          window.location.reload();
        }, 2000);
        
       
       
          document.getElementById("my_modal_3").close();
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
       // Display error message from server
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
          document.getElementById("my_modal_3").close();
      } else {
        console.error("", err);
        toast.error('Unexpected error occured', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });;
      }
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.password ? 'border-red-500' : ''}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>
            <div className="flex justify-around items-center mt-4">
              <button
                type="submit"
                className="bg-purple-700 text-white px-3 py-2 rounded-lg hover:bg-purple-800"
              >
                Login
              </button>
              <div>
                Not Registered?
                <Link to="/signup" className="underline text-blue-700">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
