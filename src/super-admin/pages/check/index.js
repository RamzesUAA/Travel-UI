import React, { useCallback, useMemo, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
// import Button from "../../unitilies/Button";
import { createBaseApi } from "../../ApiAgent";
const CheckPage = () => {
  const [checks, setChecks] = useState([]);
  const [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    createBaseApi()
      .get("check")
      .then((res) => {
        setChecks(res?.data);
      });
  }, []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      value: "",
      width: "70px",
      cellRenderer: function (params) {
        return <a href="transport">{params.value}</a>;
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
    { field: "createdAt" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ width: 1224, height: 700 }}>
        <AgGridReact
          rowData={checks}
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowSelection={"single"}
          pagination={true}
        ></AgGridReact>
      </div>

      {/*      
      <Button
        className="m-3"
        conent="Edit"
        link="travel"
        color="green"
      ></Button>
      <Button
        className="m-3"
        conent="Delete"
        link="travel"
        color="red"
        icon="delete"
      ></Button> */}
      {/* <div className="flex justify-center"></div> */}
    </div>
  );
};

export default CheckPage;
