import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Layout = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-4">
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

        <div className="hidden md:flex">
          <BsPerson size={20} />
          <div className="pr-2">Roman Alberda</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
