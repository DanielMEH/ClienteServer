import React, { useEffect, useMemo, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import {AG_GRID_LOCALE_EN} from '../locale/locale'
import OpcionTabledCrud from './OpcionTabledCrud'
export const DataTableUsers = () => {
  const [gridApi, setGridApi] = useState(null);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return await response.data;
  };
  useEffect(() => {
    getData().then((data) => {
      setGridApi(data);
    });
  }, []);

  
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Nombre",
      field: "name",
    },
    {
      headerName: "Correo",
      field: "email",
    },
    {
      headerName: "Identificador",
      field: "id",
    },
    {
      headerName: "Descripcion",
      field: "body",
    },
    {
      headerName: "Unico",
      field: "postId",
    },
    {
        headerName: "Opciones",
        field:"Settings",
        cellRenderer:OpcionTabledCrud
    }
  ]);
  const defaultColDef = useMemo(
    () => ({
      sorteable: true,
      filter: true,
    }),
    []
  );

  const gridRef = useRef()

  return (
    <>
      <div
        className="ag-theme-alpine shadow-2xl "
        id="myGrid"
        style={{ height: 520, width: "80%" }}
      >
        <AgGridReact
          localeText={AG_GRID_LOCALE_EN}
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={gridApi}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowGroupPanelShow="always"
          pivotPanelShow="always"
         
        ></AgGridReact>
      </div>
    </>
  );
};
