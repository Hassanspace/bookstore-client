import React from "react";
import bannerimg from "../../public/main-image.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Banner = () => {
  const notify = () => toast.success('Subscribed Successfully!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  
    });
  return (
    <>
      <div id="top" className="md:flex-row flex-col-reverse  mt-5  flex justify-between  items-center max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="  flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="space-y-6 mt-10">
            <h1 className="text-[30px] md:text-[35px]">
              Welcome to{" "}
              <span className="text-purple-600 font-bold ">
                FictionalFantasia
              </span>{" "}
              , Where Imagination Knows No Bounds{" "}
            </h1>
            <p className="text-sm ">
              Fictional Fantasia is a haven for dreamers, adventurers, and
              storytellers. Our shelves are filled with tales that transport you
              to magical realms, heroic quests, and far-off galaxies.
            </p>
            <div>
            <label className="input input-bordered flex items-center gap-2  dark:bg-slate-900 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:bg-slate-950 dark:text-white" placeholder="Enter Mail and to Subscribe for new updates ...." />
            </label>
            <button className="btn btn-active btn-primary font-medium text-white bg-purple-700 border-0 hover:bg-purple-800 mt-2" onClick={notify}>Subscribe</button>
            </div>
            <ToastContainer />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center md:ml-10">
        <img className="rounded-full" src={bannerimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
