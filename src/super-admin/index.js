import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TravelPage from "./pages/travel";
import CheckPage from "./pages/check";
import TransporPage from "./pages/transport";
import TransportationPage from "./pages/transportation";
import HotelPage from "./pages/hotel";
import CustomerPage from "./pages/customer";

const AdminPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="travel" element={<TravelPage />} />
        <Route path="check" element={<CheckPage />} />
        <Route path="transport" element={<TransporPage />} />
        <Route path="transportation" element={<TransportationPage />} />
        <Route path="hotel" element={<HotelPage />} />
        <Route path="customer" element={<CustomerPage />} />
      </Route>
    </Routes>
  );
};

export default AdminPage;
