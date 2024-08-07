import React from "react";
import { useState , useEffect} from "react";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const FreeBook = () => {
  const [book,setbook] = useState([])
  useEffect(() => {
  const getBook = async() =>{
    try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setbook(res.data.filter((data) => data.category === "free"))
    } catch (error) {
      console.log(error);
    }
   
  }
  getBook();
  }, [])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
 

  return <>
 <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-5 mb-5" >
 <div >
    <h1 className="text-2xl font-bold text-purple-700">Free Available Books</h1>
    <p>All of these books are available for free download, so you can enjoy reading without any cost!</p>
  </div>
  <div >
  <Slider {...settings} className="justify-center">
        {book.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
      </Slider>
  </div>
 </div>
  </>
};

export default FreeBook