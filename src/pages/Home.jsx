import React from "react";
import background from "../images/png/background.png"
import { Nav } from "../components/Nav";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    
    <div>
    <div className="relative background-img">
      <img className="max-w-[100%] w-full h-auto" src={background} alt="Background image" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-semibold text-center text-gray-600">
          Discover your dream home here!
        </h1>
        <div className="absolute flex justify-center w-full bottom-[120px]">
            <SearchForm />
          </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
