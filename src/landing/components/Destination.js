import React from "react";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Madlives from "../../assets/maldives.jpg";
import Madlives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">All countries around the world</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          src={BoraBora}
          alt="/"
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
        ></img>
        <img
          src={BoraBora2}
          alt="/"
          className="w-full h-full object-cover"
        ></img>
        <img
          src={Madlives}
          alt="/"
          className="w-full h-full object-cover"
        ></img>
        <img
          src={Madlives2}
          alt="/"
          className="w-full h-full object-cover"
        ></img>
        <img src={KeyWest} alt="/" className="w-full h-full object-cover"></img>
      </div>
    </div>
  );
};

export default Destination;
