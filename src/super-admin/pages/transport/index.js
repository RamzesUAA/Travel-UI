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
    maxWidth: 80,
    cellRenderer: function (params) {
      return <a href="transport">{params.value}</a>;
    },
  },
  { field: "type" },
  { field: "model" },
  { field: "number", headerName: "Country" },
];

const defaultColDef = {
  flex: 1,
  sortable: true,
  resizable: true,
  filter: true,
};

const TransporPage = () => {
  const [transports, setTransports] = useState([]);
  const gridRef = useRef();
  const [selectedRow, setSelectedRow] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get("transport")
      .then((res) => {
        setTransports(res?.data);
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
        .delete("transport", { data: { id } })
        .then((res) => {
          res && setTransports(transports.filter((t) => t.id != id));
        });
  };

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    setSelectedRow(selectedRows);
  }, []);

  return (
    <div className="bg-white p-5 w-full rounded">
      <div className="flex justify-between m-2 p-2">
        <div>
          <DeleteButton onClick={onDeletePressed}></DeleteButton>
          <ViewButton onClick={onViewPressed}></ViewButton>
        </div>
        <div>
          <AddButton onClick={onAddPressed}></AddButton>
        </div>
      </div>
      <div className="ag-theme-alpine w-full h-[600px]">
        <AgGridReact
          ref={gridRef}
          flex
          rowData={transports}
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

export default TransporPage;
