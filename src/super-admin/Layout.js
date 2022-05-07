import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Layout = () => {
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
          <li>
            <Link to="/admin/customer">Customers</Link>
          </li>
        </ul>

        <div className="hidden md:flex">
          <BsPerson className="mr-3" size={20} />
          <div>Roman Alberda</div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
