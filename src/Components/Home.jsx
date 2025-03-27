import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/analysis')
  }
    return (
        <div className="h-screen w-screen flex flex-col bg-gray-900 text-white items-center">
          <nav className="w-[95%] flex justify-between items-center px-12 py-4 fixed bg-black top-5 shadow-xl rounded-3xl">
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className="text-blue-500">▲</span> Ace Grade
            </div>
            <div className="flex gap-8 text-lg">  
              <a href="#" className="hover:text-blue-500 transition">Quiz Prep</a>
              <a href="#" className="hover:text-blue-500 transition">Resources</a>
              <a href="#" className="hover:text-blue-500 transition">Community</a>
              <a href="#" className="hover:text-blue-500 transition">Tools</a>
              <a href="#" className="hover:text-blue-500 transition">About Us</a>
            </div>
            <button className="bg-blue-500 px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">Log In</button>
          </nav>
    
          <section className="flex-1 flex flex-col justify-center items-center text-center px-8 mt-20">
    
            <h1 className="text-6xl font-bold mt-6 max-w-4xl leading-tight tracking-wide">
              Ace Your Academics with Collaboration & Innovation
            </h1>
    
            <p className="text-xl mt-4 text-gray-300 max-w-2xl">
              Start your journey to smarter learning and academic success with our top-tier resources.
            </p>
    
            <button onClick={handelClick} className="mt-8 bg-blue-500 px-8 py-4 rounded-xl text-xl font-semibold flex items-center gap-2 hover:bg-blue-600 transition shadow-lg">
              Get Started →
            </button>
          </section>
        </div>
      );
}

export default Home