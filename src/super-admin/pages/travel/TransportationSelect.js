import React from "react";
import AddButton from "../../unitilies/AddButton";

const TransportationSelect = ({
  tour,
  transportations,
  onAddPressed,
  onSelectChanged,
}) => {
  const getTransportationList = (tourTransportation, allTransportations) => {
    const trans = tour?.transportations?.filter(
      (t) => t?.id != tourTransportation?.id
    );

    const temp = transportations?.filter(
      (t) => !trans.map((at) => at?.id)?.includes(t?.id)
    );

    return temp;
  };
  return (
    <div>
      <label className="w-full">Transportation:</label>
      {console.log(tour?.transportations)}
      {tour?.transportations?.map((transportation) => (
        <div key={transportation?.id}>
          <select
            id={`transportation-${transportation?.id}`}
            onChange={(e) => {
              onSelectChanged?.(e?.target?.value, transportation?.id);
              // const tempTourType = tourTypes?.find(
              //   (tourType) => tourType?.id == e?.target?.value
              // );
              // setTour({
              //   ...tour,
              //   tourType: tempTourType,
              // });
            }}
            className="form-select form-select-lg mb-3
            appearance-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            aria-label=".form-select-lg example"
            value={transportation?.id}
          >
            <option value={0}></option>
            {getTransportationList(transportation, transportations)?.map(
              (t) => (
                <option value={t?.id}>
                  {`Depature location: ${t?.depatureLocation};`}
                </option>
              )
            )}
          </select>
        </div>
      ))}
      <AddButton
        style={{ marginLeft: "35px" }}
        onClick={onAddPressed}
      ></AddButton>
    </div>
  );
};

export default TransportationSelect;
