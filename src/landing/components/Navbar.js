import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const onAdminPresssed = () => {
    navigate("admin/travel");
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleNav}>TRAVEL-APP</h1>
      </div>

      <div className="hidden md:flex">
        <BsPerson
          className="cursor-pointer"
          size={30}
          onClick={onAdminPresssed}
        />
      </div>

      {/* Hamburger */}
      {/* <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={20} className="text-black"></AiOutlineClose>
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div> */}

      {/* Mobile drop-down */}
      {/* <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>TRAVEL-APP</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Desctination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
