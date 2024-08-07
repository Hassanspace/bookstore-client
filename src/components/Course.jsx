import React, { useState , useEffect} from "react";
import axios from "axios";

import Card from "./Card";
import { Link } from "react-router-dom";

const Course = () => {
  const [book,setbook] = useState([])
  useEffect(() => {
  const getBook = async() =>{
    try {
      const res = await axios.get("http://localhost:4001/book");
      
      setbook(res.data);
    } catch (error) {
      console.log(error);
    }
   
  }
  getBook();
  }, [])
  
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex flex-col items-center justify-center mt-6 space-y-3 ">
          <h1 className="font-bold text-2xl  md:text-4xl">
            Welcome  Back ! To The Heaven of{" "}
            <span className="text-purple-600">Fictional World :)</span>
          </h1>
          <p className=" flex justify-center">
            Welcome to the Heaven of Fictional Books World, a paradise for book
            lovers and dreamers alike! Immerse yourself in a universe where
            imagination knows no bounds and every page is a portal to another
            world. Whether you're a fan of epic adventures, heartwarming
            romances, thrilling mysteries, or fantastical realms, our collection
            offers something for everyone. Lose yourself in captivating stories,
            meet unforgettable characters, and explore endless possibilities.
            Join us on this literary journey and let your imagination soar in
            the Heaven of Fictional Books World!
          </p>
          <Link to={"/"}>
            <button className="px-3 py-2 bg-purple-700 hover:bg-purple-800 cursor-pointer border-none text-white rounded-lg ">
              Back
            </button>
          </Link>
        </div>
        <div className="flex justify-evenly items-center flex-wrap">
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
