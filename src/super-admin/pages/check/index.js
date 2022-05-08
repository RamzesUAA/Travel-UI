import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import DeleteButton from "../../unitilies/DeleteButton";
import ViewButton from "../../unitilies/EditButton";
import AddButton from "../../unitilies/AddButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const columnDefs = [
  {
    field: "id",
    value: "",
    width: "70px",
    cellRenderer: function (params) {
      return <a href="check">{params.value}</a>;
    },
  },
  { field: "price" },
  { field: "personCount" },
  { field: "tour.country", headerName: "Country" },
  {
    valueGetter: function sumField(params) {
      return `${params.data.user.name} ${params.data.user.surname}`;
    },
    headerName: "User name",
  },
  {
    valueGetter: function sumField(params) {
      return `${params.data.manager.name} ${params.data.manager.surname}`;
    },
    headerName: "Travel agent name",
  },
  {
    valueGetter: function sumField(params) {
      moment(params.data.createdAt).format("YYYY/MM/DD  HH:mm");
      return `${moment(params.data.createdAt).format("YYYY/MM/DD  HH:mm")}`;
      // (
      //   <Moment format="YYYY/MM/DD  HH:mm">{params.data.createdAt}</Moment>
      // );
    },
    headerName: "Created At",
  },
  // { field: "createdAt" },
];

const defaultColDef = {
  flex: 1,
  sortable: true,
  resizable: true,
  filter: true,
};

const CheckPage = () => {
  const [checks, setChecks] = useState([]);
  const gridRef = useRef();
  const [selectedRow, setSelectedRow] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get("check")
      .then((res) => {
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

export default CheckPage;
