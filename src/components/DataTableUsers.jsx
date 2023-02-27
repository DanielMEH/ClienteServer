import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import moment from 'moment-with-locales-es6';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import plus from "../assets/icons/plus.svg";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import OpcionTabledCrud from "./OpcionTabledCrud";
import UserRegister from "./UserRegister";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly} from "./ChackSelection";
import {ChackSelection} from "./ChackSelection";
import { setNormal} from "./ChackSelection";
import UploadExcel from "./UploadExcel";
import {useGetUsers} from "../hooks/context/GetUsersContext"

moment.locale("es");

export const DataTableUsers = () => {

  const {getUsersAdmins,getUsers,getCountData,getCountDateUsers,
    getActivosUsers,
    getInactivosUsers } = useGetUsers()
  console.log();

  useEffect(() => {
    getUsersAdmins()
    getCountData()

  },[])
 
  const defaultColDef  = ChackSelection()
  const gridRef = useRef();

  const [stateModel, StateModel] = useState(false);
  const [ExcelModel, setExcelModel] = useState(false);


  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Correo",
      field: "correo",
      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
      chartDataType: 'name',
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Contraseña",
      field: "password",
      chartDataType: 'email',
      filter: "agTextColumnFilter",
      
    },
    {
      headerName: "Identificador",
      field: "idAccount",
      filter: "agTextColumnFilter",
      chartDataType: 'id'
    },
    {
      headerName: "Hora de creacion de cuenta",
      field: "hora",
      chartDataType: 'body',
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Fecha de creación",
      field: "fecha",
      chartDataType: 'postId',
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Estado",
      field: "estado",
      chartDataType: 'postId',
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Opciones",
      field: "Settings",
      cellRenderer: OpcionTabledCrud,
    },
  ]);
 

  const handleShowModel = () => {
    StateModel(!stateModel);
  };
  const handleModelExcel = () => {
    setExcelModel(!ExcelModel);
  };
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const onBtExportExel = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);
  const onBtPrint = useCallback(() => {
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      window.print();
      setNormal(api);
    }, 2000);
  }, []);
  const onChart1 = useCallback(() => {
    var params = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 4,
        columns: ['idAccount', 'correo','name',],
      },
      chartType: 'groupedColumn',
      chartThemeName: 'ag-vivid',
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'Estadisticas de los 5 primeros usuarios',
          },
        },
      },
    };
    gridRef.current.api.createRangeChart(params);
  }, []);

  const onChart2 = useCallback(() => {
    var params = {
      cellRange: {
        columns: ['id', 'postId','name',],
      },
      chartType: 'groupedBar',
      chartThemeName: 'ag-pastel',
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'Todos los usuarios',
          },
          legend: {
            enabled: false,
          },
        },
      },
      unlinkChart: true,
    };
    gridRef.current.api.createRangeChart(params);
  }, []);

  
  

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);
  return (
    <>
    <UploadExcel estado={ExcelModel}/>
      <UserRegister estado={stateModel} />
      <div className="panel_opciones bg-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex justify-between items-center">
        <section className="items-center flex">
          
            <div className="users flex items-center mx-2">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#3498DB" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"/></svg>
              </span>
              <span className="text-[#3498DB] mx-1"> Usuarios</span>
              <span className="text-[#3498DB] mx-1">{getCountDateUsers}</span>
            </div>
          </section>
          

          <section className="flex ">
          <button onClick={onBtnExport} className="flex items-center border mx-1 p-1 rounded-md">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="green"
                  d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 8v11h14V8H5Zm7 10l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Zm-7 1h14H5Z"
                />
              </svg>
            </span>
            <span>Descargar archivo scv</span>
          </button>
          <button onClick={onBtExportExel}  className="flex items-center border mx-1 p-1 rounded-md">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#158c51"
                  d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286L7.4 8H5l2.8 4L5 16h2.4L9 13.714L10.6 16H13l-2.8-4z"
                />
              </svg>
            </span>
            <span>Exportar a excel</span>
          </button>
          <button className="flex items-center border mx-1 p-1 rounded-md"
          onClick={handleModelExcel}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0c6e36"
                  d="M4 3h14a2 2 0 0 1 2 2v7.08a6.01 6.01 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7H4m8 0v4h6V7h-6m-8 6v4h6v-4H4m14.44 2v2h4v2h-4v2l-3-3l3-3"
                />
              </svg>
            </span>
            <span>Importar archivo excel </span>
          </button>
          <button onClick={onBtPrint} className="flex items-center border mx-1 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 7H6V3h12v4Zm0 5.5q.425 0 .713-.288T19 11.5q0-.425-.288-.713T18 10.5q-.425 0-.713.288T17 11.5q0 .425.288.713T18 12.5ZM16 19v-4H8v4h8Zm2 2H6v-4H2v-6q0-1.275.875-2.138T5 8h14q1.275 0 2.138.863T22 11v6h-4v4Z"
              />
            </svg>
            <span>Imprimir</span>
          </button>
          <button onClick={handleShowModel} className=" bg-[#1daf53] text-white flex items-center p-1 rounded-md border">
            <img src={plus} alt="" />
            Crear usuario
          </button>
          </section>
          
        </div>
        <div className="panel2">
         <div className="buttons">
         
         </div>
        </div>
      </div>
      <div className="buttons">
      
      </div>
        <div className="panel_second_h w-[100%] mx-auto flex justify-between items-center">
          
       <div className="panel_analitic flex">
        
       <button onClick={onChart1} className="bg-white p-3 hover:shadow-xl my-2 rounded-lg mx-1">
          
          <div className="flex">
          <span className="mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16">
            <path fill="#3498DB" fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/></svg>
          </span>
          <span>
          Estadisticas de los primeros 5 usuarios

          </span>
          </div>
          
          </button>
          <button onClick={onChart2} className="bg-white p-3 hover:shadow-xl my-2 rounded-lg mx-1">
          <div className="flex">
          <span className="mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16">
            <path fill="#3498DB" fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/></svg>
          </span>
          <span>
         Todos los usuarios

          </span>
          </div>
            </button>
            <div className="content flex ">
      <div className="inactive flex items-center ">
      <div className=" bg-white p-2 rounded-lg mx-1">
      <span className="text-green-500 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08l5.13-5.17M10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11L10 17m1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z"/></svg>
        
        <span>Activos {getActivosUsers} </span></span>
      </div>
      <div className="bg-white p-2 rounded-lg">
      <span className="text-[red] flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="red" d="M10 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H2v-2c0-2.21 3.58-4 8-4m10-2V7h2v6h-2m0 4v-2h2v2h-2Z"/></svg> 
           <div className="span mx-1">Inactivos {getInactivosUsers}</div></span>
      </div>

      </div>
  
     </div>
       </div>
     
       <div className="search bg-white flex items-center p-2 rounded-full">
        
        <div className="icon_search mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16"><g transform="translate(16 0) scale(-1 1)">
          <path fill="#ABB2B9" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"/></g></svg>
        </div>
        <div className="input_panel">
        <input
            type="text"
            id="filter-text-box"
            placeholder="Buscar..."
            onInput={onFilterTextBoxChanged}
            className="outline-none"
          />
        </div>
       </div>
        </div>
      <div
        className="ag-theme-alpine shadow-2xl mx-auto "
        id="myGrid"
        style={{ height: 600, width: "100%",  }}
      >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={getUsers}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowGroupPanelShow="always"
          pivotPanelShow="always"
          rowDragManaged={true}
          enableRangeSelection={true}
          sideBar={
            true
            
          }
          icons={true}
          pagination={true}
          paginationPageSize={10}
          paginateChildRows={true}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          enableCharts={true}
          cacheQuickFilter={true}
        ></AgGridReact>
      </div>
    </>
  );
};
