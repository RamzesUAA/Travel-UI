import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBaseApi } from "../../ApiAgent";
import EditButton from "../../unitilies/EditButton";
import DeleteButton from "../../unitilies/DeleteButton";

const ViewTravelPage = () => {
  const params = useParams();
  const [tour, setTour] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    createBaseApi()
      .get(`tour/${params.id}`)
      .then((res) => setTour(res.data));
  }, []);

  const onEditPressed = () => {
    navigate(`/admin/travel/edit/${tour?.id}`);
  };

  return (
    <div className="bg-white py-5 w-full rounded h-100">
      <div className="flex align-middle justify-between m-5">
        <h2>View Travel</h2>
        <div>
          <EditButton onClick={onEditPressed}></EditButton>
          <DeleteButton></DeleteButton>
        </div>
      </div>
      <div className="border-solid border-2 border-gray-400 rounded py-5 m-5">
        <div className="pl-5">
          <h3 className="font-medium mb-3 underline decoration-solid">
            General info
          </h3>
          <div className="country-view">
            <div className="text-lg inline-block w-[180px]">Country:</div>
            <div className="text-lg inline">{tour?.country}</div>
          </div>
          <div className="city-view">
            <div className="text-lg inline-block w-[180px]">City:</div>
            <div className="text-lg inline">{tour?.city}</div>
          </div>
          <div className="insurance-view">
            <div className="text-lg inline-block w-[180px]">Insurance:</div>
            <div className="text-lg inline">
              {tour?.includedInsurance ? "yes" : "no"}
            </div>
          </div>
          <div className="tour-type-view">
            <div className="text-lg inline-block w-[180px]">Tour type:</div>
            <div className="text-lg inline">{tour?.tourType?.type}</div>
          </div>
        </div>
      </div>
      <div className="border-solid border-2 border-gray-400 rounded py-5 m-5">
        <div className="pl-5">
          <h3 className="font-medium mb-3 underline decoration-solid">
            Hotel info
          </h3>
          <div className="city-view">
            <div className="text-lg inline-block w-[180px]">Name:</div>
            <div className="text-lg inline">{tour?.hotel?.name}</div>
          </div>
          <div className="hotel-city-view">
            <div className="text-lg inline-block w-[180px]">City:</div>
            <div className="text-lg inline">{tour?.hotel?.city}</div>
          </div>
          <div className="hotel-address-view">
            <div className="text-lg inline-block w-[180px]">Address:</div>
            <div className="text-lg inline">{tour?.hotel?.address}</div>
          </div>
          <div className="eating-type-view">
            <div className="text-lg inline-block w-[180px]">Eating type:</div>
            <div className="text-lg inline">{tour?.hotel?.eatingType}</div>
          </div>
          <div className="hotel-price-view">
            <div className="text-lg inline-block w-[180px]">Price per day:</div>
            <div className="text-lg inline">{tour?.hotel?.pricePerDay}$</div>
          </div>
        </div>
      </div>
      <div className="border-solid border-2 border-gray-400 rounded py-5 m-5">
        <div className="pl-5">
          <h3 className="font-medium mb-3 underline decoration-solid">
            Transportation info
          </h3>
          {tour?.transportations?.map((transportation) => (
            <div className="mr-5 mb-10 border-solid border-2 border-gray-400 rounded pl-2">
              <div className="transport-type-view">
                <div className="text-lg inline-block w-[180px]">
                  Transport type:
                </div>
                <div className="text-lg inline">
                  {transportation?.transport?.type}
                </div>
              </div>
              <div className="hotel-address-view">
                <div className="text-lg inline-block w-[180px]">
                  Transport model:
                </div>
                <div className="text-lg inline">
                  {transportation?.transport?.model}
                </div>
              </div>
              <div className="hotel-city-view">
                <div className="text-lg inline-block w-[180px]">
                  Transport number:
                </div>
                <div className="text-lg inline">
                  {transportation?.transport?.number}
                </div>
              </div>
              <div className="eating-type-view">
                <div className="text-lg inline-block w-[180px]">
                  Depature location:
                </div>
                <div className="text-lg inline">
                  {transportation?.depatureLocation}
                </div>
              </div>
              <div className="hotel-price-view">
                <div className="text-lg inline-block w-[180px]">
                  Depature time:
                </div>
                <div className="text-lg inline">
                  {transportation?.depatureTime}
                </div>
              </div>
              <div className="eating-type-view">
                <div className="text-lg inline-block w-[180px]">
                  Arrival location:
                </div>
                <div className="text-lg inline">
                  {transportation?.arrivalLocation}
                </div>
              </div>
              <div className="hotel-price-view">
                <div className="text-lg inline-block w-[180px]">
                  Arrival time:
                </div>
                <div className="text-lg inline">
                  {transportation?.arrivalTime}
                </div>
              </div>
            </div>
          ))}
          {/* 
          <div className="mr-5 mb-10 border-solid border-2 border-gray-400 rounded pl-2">
            <div className="transport-type-view">
              <div className="text-lg inline-block w-[180px]">
                Transport type:
              </div>
              <div className="text-lg inline">car</div>
            </div>
            <div className="hotel-address-view">
              <div className="text-lg inline-block w-[180px]">
                Transport model:
              </div>
              <div className="text-lg inline">Mitsubisi</div>
            </div>
            <div className="hotel-city-view">
              <div className="text-lg inline-block w-[180px]">
                Transport number:
              </div>
              <div className="text-lg inline">AX8855BC</div>
            </div>
            <div className="eating-type-view">
              <div className="text-lg inline-block w-[180px]">
                Depature location:
              </div>
              <div className="text-lg inline">Lviv, LV</div>
            </div>
            <div className="hotel-price-view">
              <div className="text-lg inline-block w-[180px]">
                Depature time:
              </div>
              <div className="text-lg inline">11.12.2002 12:12</div>
            </div>
            <div className="eating-type-view">
              <div className="text-lg inline-block w-[180px]">
                Arrival location:
              </div>
              <div className="text-lg inline">Lviv, LV</div>
            </div>
            <div className="hotel-price-view">
              <div className="text-lg inline-block w-[180px]">
                Arrival time:
              </div>
              <div className="text-lg inline">11.12.2002 12:12</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewTravelPage;
