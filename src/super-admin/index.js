import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TravelPage from "./pages/travel";
import CheckPage from "./pages/check";
import TransporPage from "./pages/transport";
import TransportationPage from "./pages/transportation";
import HotelPage from "./pages/hotel";
import EditTransportPage from "./pages/transport/EditTransportPage";
import CreateTransportPage from "./pages/transport/CreateTransportPage";
import ViewTravelPage from "./pages/travel/ViewTravelPage";
import EditTravelPage from "./pages/travel/EditTravelPage";
import CreateTravelPage from "./pages/travel/CreateTravelPage";
import RequireAuth from "../login/RequireAuth";

const AdminPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          element={<RequireAuth allowedRoles={["TravelAgent", "Admin"]} />}
        >
          <Route path="travel" element={<TravelPage />} />

          <Route path="travel/:id" element={<ViewTravelPage />} />
          <Route path="travel/edit/:id" element={<EditTravelPage />} />
          <Route path="travel/new" element={<CreateTravelPage />} />

          <Route path="check" element={<CheckPage />} />

          <Route path="transport" element={<TransporPage />} />
          <Route path="transport/edit/:id" element={<EditTransportPage />} />
          <Route path="transport/new" element={<CreateTransportPage />} />

          <Route path="transportation" element={<TransportationPage />} />

          <Route path="hotel" element={<HotelPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminPage;
