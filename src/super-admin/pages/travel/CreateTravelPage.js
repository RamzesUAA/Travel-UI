import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CancelButton from "../../unitilies/CancelButton";
import SaveButton from "../../unitilies/SaveButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";
import Input from "../../unitilies/Input";
import TransportationSelect from "./TransportationSelect";

const CreateTravelPage = () => {
  const [tour, setTour] = useState();
  const [tourTypes, setTourTypes] = useState();
  const [hotels, setHotels] = useState();
  const [transportation, setTransportations] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setTour({
      ...tour,
      transportations: [{}],
      includedInsurance: false,
    });
    createBaseApiAuth()
      .get("tourType")
      .then((res) => setTourTypes(res.data));

    createBaseApiAuth()
      .get("hotel")
      .then((res) => setHotels(res.data));

    createBaseApiAuth()
      .get("transportation")
      .then((res) => setTransportations(res.data));
  }, []);

  const onCancelPressed = () => {
    navigate(-1);
  };

  const onSavePressed = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(tour);
    let res = { ...tour };
    const filteredTransportation = tour?.transportations?.filter(
      (t) => t && Object.keys(t).length !== 0
    );
    res.transportations = filteredTransportation;
    setTour(res);
    createBaseApiAuth()
      .post(`tour`, res)
      .then((res) => {
        console.log(res);
        res?.data && navigate(`/admin/travel/${res?.data}`);
      });
  };
  const onAddPressed = useCallback(() => {
    const tempTransportation = [...tour.transportations, {}];
    // tour.transportations = tempTransportation;
    setTour({ ...tour, transportations: tempTransportation });
  });

  const onSelectChanged = useCallback((value, changedSelect) => {
    const trans = transportation?.find((t) => t?.id == value);
    var elementPos = tour?.transportations
      ?.map((x) => x?.id)
      .indexOf(changedSelect);

    const tempTransp = tour?.transportations;
    tempTransp[elementPos] = trans;
    setTour({ ...tour, transportations: tempTransp });
  });

  return (
    <div className="bg-white p-5 w-full rounded">
      <h2>Add Tour</h2>
      <div>
        <form className="mt-8" onSubmit={onSavePressed}>
          <Input
            id="country"
            labelText="Country:"
            value={tour?.country}
            onChange={(value) => {
              setTour({ ...tour, country: value });
            }}
          ></Input>
          <Input
            id="city"
            labelText="City:"
            value={tour?.city}
            onChange={(value) => setTour({ ...tour, city: value })}
          ></Input>
          <div>
            <label htmlFor="insurance" className="w-full">
              Insurance included:
            </label>
            <select
              id="insurance"
              onChange={(e) => {
                setTour({
                  ...tour,
                  includedInsurance: e.target.value == 1 ? true : false,
                });
              }}
              className="form-select form-select-lg mb-3
              appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              aria-label=".form-select-lg example"
              value={tour?.includedInsurance ? 1 : 0}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div>
            <label htmlFor="tour-type" className="w-full">
              Tour type:
            </label>
            <select
              id="tour-type"
              onChange={(e) => {
                const tempTourType = tourTypes?.find(
                  (tourType) => tourType?.id == e?.target?.value
                );

                setTour({
                  ...tour,
                  tourType: tempTourType,
                });
              }}
              className="form-select form-select-lg mb-3
              appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              aria-label=".form-select-lg example"
              value={tour?.tourType?.id}
            >
              <option value={0}></option>
              {tourTypes?.map((tourType) => (
                <option value={tourType?.id}>{tourType?.type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="hotel" className="w-full">
              Hotel:
            </label>
            <select
              required
              id="hotel"
              onChange={(e) => {
                const tempHotel = hotels?.find(
                  (hotel) => hotel?.id == e?.target?.value
                );
                setTour({
                  ...tour,
                  hotel: tempHotel,
                });
              }}
              className="form-select form-select-lg mb-3
            appearance-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
              aria-label=".form-select-lg example"
              value={tour?.hotel?.id}
            >
              <option value={0}></option>

              {hotels?.map((hotel) => (
                <option
                  value={hotel?.id}
                >{`Name:${hotel?.name};  Location:${hotel?.city};  Price:${hotel?.pricePerDay}$`}</option>
              ))}
            </select>
          </div>
          <TransportationSelect
            transportations={transportation}
            tour={tour}
            onAddPressed={onAddPressed}
            onSelectChanged={onSelectChanged}
          ></TransportationSelect>
          <div></div>
          <div className="flex justify-between m-2 p-2">
            <CancelButton onClick={onCancelPressed}></CancelButton>
            <button
              type="submit"
              className="cursor-pointer h-10 items-center py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-3 w-30 px-8"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTravelPage;
