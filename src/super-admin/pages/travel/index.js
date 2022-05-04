import React from "react";
import TravelCard from "./Card";
import borabora from "../../../assets/borabora.jpg";
import SelectsCard from "./SelectsCard";

const TravelPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora} text="Maldives" />
      <SelectsCard bg={borabora} text="Antigua" />
      <SelectsCard bg={borabora} text="Cozumel" />
      <SelectsCard bg={borabora} text="Jamaica" />
      <SelectsCard bg={borabora} text="Key West" />
      <SelectsCard bg={borabora} text="Key West" />
    </div>
  );
};

export default TravelPage;
