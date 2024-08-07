import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aboutus from "../../public/about.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-8">About Us</h1>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2 md:pr-8">
              <p className="text-lg mb-6">
                Welcome to <span className="text-purple-700 font-bold">FictionalFantasia</span>, your gateway to exploring magical realms, epic quests, and captivating stories. We are dedicated to bringing you a diverse collection of books and content that ignite your imagination and transport you to fantastical worlds.
              </p>
              <p className="text-lg mb-6">
                Our mission is to create a haven for dreamers, adventurers, and storytellers. At FictionalFantasia, we believe in the power of stories to inspire and entertain. Whether you're seeking a thrilling adventure, a heartwarming tale, or a deep dive into a fantastical universe, we have something for everyone.
              </p>
            </div>
            <img
              src={Aboutus} // Replace with your image URL
              alt="About Us"
              className="rounded-lg shadow-lg  md:w-1/2 object-cover h-[400px] w-[400px]"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2024, FictionalFantasia began as a passion project with a vision to curate a unique collection of stories that push the boundaries of imagination. Our team is composed of avid readers and writers who are committed to sharing their love for literature with the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Passion for Storytelling: Driven by our love for great stories.</li>
              <li>Commitment to Quality: Striving to provide the best content and experience.</li>
              <li>Inclusivity: Celebrating diverse voices and perspectives in our collection.</li>
              <li>Community: Building a supportive and engaging community.</li>
            </ul>
            <p className="text-lg">
              Thank you for visiting FictionalFantasia. We hope you find joy and inspiration in the stories we offer. If you have any questions or feedback, feel free to reach out to us!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
