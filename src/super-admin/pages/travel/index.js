import React, { useEffect, useState } from "react";
import TravelCard from "./Card";
import borabora from "../../../assets/borabora.jpg";
import SelectsCard from "./SelectsCard";
import { createBaseApiAuth } from "../../ApiAgent";
import AddButton from "../../unitilies/AddButton";
import { useNavigate } from "react-router-dom";

const TravelPage = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get("tour")
      .then((res) => setTours(res.data));
  }, []);

  const onAddPressed = () => {
    navigate("new");
  };

  const onViewPressed = (id) => {
    navigate(`${id}`);
  };
  const onEditPressed = (id) => {
    navigate(`edit/${id}`);
  };
  return (
    <div className="bg-white py-5 w-full rounded h-100">
      <div className="flex justify-center">
        <AddButton onClick={onAddPressed}></AddButton>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 py-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <SelectsCard
            key={tour.id}
            onViewPress={() => onViewPressed(tour?.id)}
            onEditPress={() => onEditPressed(tour?.id)}
            bg={borabora}
            id={tour.id}
            location={`${tour.country}, ${tour.city}`}
            description={tour?.hotel?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelPage;
