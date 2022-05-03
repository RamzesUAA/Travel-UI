import React from "react";
import vid from "../../assets/vid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={vid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>The best travel agency ever</h1>
        <h2 className="p4">3% disscount for first trip</h2>
        {/* <form5
          className="flex justify-between items-center max-w-[700px] 
        mx-auto border p-1 rounded-md text-black  bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            ></input>
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon text"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Hero;
