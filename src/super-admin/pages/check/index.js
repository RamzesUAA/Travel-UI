import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "../../unitilies/Button";
import deleteIcon from "../../../assets/delete.svg";
import { LoadingIcon } from "../../unitilies/LoadingIcon";
const CheckPage = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "athlete",
      minWidth: 170,
    },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      // headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ width: 1224, height: 700 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          autoGroupColumnDef={autoGroupColumnDef}
          rowSelection={"single"}
          // rowGroupPanelShow={"always"}
          // pivotPanelShow={"always"}
          pagination={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
      <div className="flex justify-center">
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
        ></Button>
      </div>
    </div>
  );
};

export default CheckPage;
