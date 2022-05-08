import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import DeleteButton from "../../unitilies/DeleteButton";
import ViewButton from "../../unitilies/EditButton";
import AddButton from "../../unitilies/AddButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";

const columnDefs = [
  {
    field: "id",
    value: "",
    width: "70px",
    cellRenderer: function (params) {
      return <a href="check">{params.value}</a>;
    },
  },
  { field: "arrivalLocation" },
  { field: "arrivalTime" },
  { field: "depatureLocation" },
  { field: "depatureTime" },
  {
    headerName: "Transport Id",
    valueGetter: (params) => {
      return `${params?.data?.transport?.id}`;
    },
  },
];

const defaultColDef = {
  flex: 1,
  sortable: true,
  resizable: true,
  filter: true,
};

const TransportationPage = () => {
  const [checks, setChecks] = useState([]);
  const gridRef = useRef();
  const [selectedRow, setSelectedRow] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get("transportation")
      .then((res) => {
        console.log(res);
        setChecks(res?.data);
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
        .delete("check", { data: { id } })
        .then((res) => {
          res && setChecks(checks.filter((t) => t.id != id));
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
          rowData={checks}
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

export default TransportationPage;
