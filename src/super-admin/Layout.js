import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

const Layout = () => {
  const { auth, setAuth } = useAuth();
  const [personPressed, setPersonPressed] = useState(false);

  const onLogoutPressed = () => {
    setAuth({});
    localStorage.setItem("token", "");
  };
  return (
    <div className="bg-neutral-100 h-auto pb-10">
      <div className="w-full flex justify-between items-center px-4 pb-10">
        <div>
          <h1>TRAVEL-APP</h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            <Link to="/admin/travel">Travels</Link>
          </li>
          <li>
            <Link to="/admin/check">Checks</Link>
          </li>
          <li>
            <Link to="/admin/transport">Transports</Link>
          </li>
          <li>
            <Link to="/admin/hotel">Hotels</Link>
          </li>
          <li>
            <Link to="/admin/transportation">Transportations</Link>
          </li>
        </ul>

        <div
          className="hidden md:flex cursor-pointer"
          onClick={() => setPersonPressed(!personPressed)}
        >
          <BsPerson className="mr-3" size={20} />
          <div>
            {auth?.firstName} {auth?.lastName}
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer absolute top-[44px] right-0 w-40 bg-white rounded-md shadow-sm -space-y-px"
        style={{ display: personPressed ? "block" : "none" }}
        onClick={onLogoutPressed}
      >
        Logout
      </div>
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

// position: absolute;
// right: 0;
// top: 44px;
// width: 164px;
// background-color: white;
// font-weight: 500;
// border-radius: 10px;
// cursor: pointer;

export default Layout;
