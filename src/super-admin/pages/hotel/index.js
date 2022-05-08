import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import DeleteButton from "../../unitilies/DeleteButton";
import ViewButton from "../../unitilies/EditButton";
import AddButton from "../../unitilies/AddButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";

const columnDefs = [
  {
    field: "name",
    value: "",
    cellRenderer: function (params) {
      return <a href="hotel">{params.value}</a>;
    },
  },
  {
    field: "stars",
  },
  {
    field: "pricePerDay",
    valueGetter: (params) => {
      return `${params?.data?.pricePerDay}$`;
    },
  },
  { field: "country", headerName: "Country" },
  { field: "city", headerName: "City" },
  { field: "address", headerName: "Address" },
  { field: "eatingType", headerName: "EatingType" },
];

const defaultColDef = {
  flex: 1,
  sortable: true,
  resizable: true,
  filter: true,
};

const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const gridRef = useRef();
  const [selectedRow, setSelectedRow] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get("hotel")
      .then((res) => {
        setHotels(res?.data);
      });
  }, []);

  const onAddPressed = () => {
    navigate("new");
  };

  const onViewPressed = () => {
    const id = selectedRow?.[0]?.id;
    id && navigate(`edit/${id}`);
  };

  const onDeletePressed = () => {
    const id = selectedRow?.[0]?.id;
    id &&
      createBaseApiAuth()
        .delete("hotel", { data: { id } })
        .then((res) => {
          res && setHotels(hotels.filter((t) => t.id != id));
        });
  };

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    setSelectedRow(selectedRows);
  }, []);

  return (
    <div className="bg-white p-5 w-full rounded">
      {/* <div className="flex justify-between m-2 p-2">
        <div>
          <DeleteButton onClick={onDeletePressed}></DeleteButton>
          <ViewButton onClick={onViewPressed}></ViewButton>
        </div>
        <div>
          <AddButton onClick={onAddPressed}></AddButton>
        </div>
      </div> */}
      <div className="ag-theme-alpine w-full h-[600px]">
        <AgGridReact
          ref={gridRef}
          flex
          rowData={hotels}
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowSelection={"single"}
          pagination={true}
          onSelectionChanged={onSelectionChanged}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default HotelPage;
