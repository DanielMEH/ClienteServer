import React, {
    useRef,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import moment from 'moment-with-locales-es6';
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import Skeleton from 'react-loading-skeleton'
  import 'react-loading-skeleton/dist/skeleton.css'
  import { AgGridReact } from "ag-grid-react";
  import "ag-grid-enterprise";
  import plus from "../assets/icons/plus.svg";
  import { AG_GRID_LOCALE_EN } from "../locale/locale";
  import OpcionTabledCrud from "./OpcionTabledCrud";
  import { checkboxSelection } from "./ChackSelection";
  import { headerCheckboxSelection } from "./ChackSelection";
  import { setPrinterFriendly} from "./ChackSelection";
  import {ChackSelection} from "./ChackSelection";
  import { setNormal} from "./ChackSelection";
  import UploadExcel from "./UploadExcel";
  import {useGetUsers} from "../hooks/context/GetUsersContext"
  import { useContextProduct } from "../hooks/context/ContextProduxt";
import { FormProduct } from "./FormProduct/FormProduct";
 import OptionsProducto from "./FormProduct/OptionsProducto"
  moment.locale("es");
  
  export const DatatableProduct = () => {
    const {getProductsAll,dataProduct} = useContextProduct()
    useEffect(() => {
  
      getProductsAll()
   
    },[])

    const {getUsersAdmins,getCountData} = useGetUsers()
      const [loading, setLoading] = useState(true)
      const [active, setActive] = useState(false)
      const [prices, setPrices] = useState(false)
    useEffect(() => {
      const initial = async () => {
       await  getUsersAdmins()
       await  getCountData()
        setLoading(false)
      }
  
      initial()
  
    },[])
   
    const defaultColDef  = ChackSelection()
    const gridRef = useRef();
  
    const [stateModel, StateModel] = useState(false);
    const [ExcelModel, setExcelModel] = useState(false);

  
  
    const [columnDefs, setColumnDefs] = useState([
      {
        headerName: "Identificador",
        field: "_id",
        rowDrag: true,
        checkboxSelection: checkboxSelection,
        headerCheckboxSelection: headerCheckboxSelection,
        filter: "agTextColumnFilter",

      },
      {
        headerName: "Nombre",
        field: "name",
       chartDataType: 'series',
        filter: "agTextColumnFilter",
        
      },
      {
        headerName: "Descripción",
        field: "description",
        filter: "agTextColumnFilter",
        chartDataType: 'series',
      },
      {
        headerName: "Precio de compra",
        field: "price",
        chartDataType: 'series',
        filter: "agTextColumnFilter",
        sort: "desc"
         
      },
      {
        headerName: "Precio de venta",
        field: "priceBuy",
       chartDataType: 'series',
        filter: "agTextColumnFilter",
        sort: "desc",
      },
      
      {
        headerName: "Caducidad",
        field: "caducidad",
        chartDataType: 'category',
        filter: "agTextColumnFilter",
      },
      {
        headerName: "Iva",
        field: "iva",
        chartDataType: 'series',
        
        
      },
      {
        headerName: "Opciones",
        field: "Settings",
        cellRenderer: OptionsProducto,
        
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
   const  onChart1  = useCallback(() => { 
    
      var params = {
        cellRange: {
          rowStartIndex: 0,
        rowEndIndex: 8,
          columns: ['caducidad', 'price_f', 'priceBuy','iva'],
        },
       chartType: 'groupedColumn',
      chartThemeName: 'ag-pastel',
        chartThemeOverrides: {
          common: {
            title: {
              enabled: true,
              text: 'Productos',
            },
            legend: {
              enabled: true,
            },  
          },
        },
        unlinkChart: true,
      };
      gridRef.current.api.createRangeChart(params);
    }, []);
  
    const onChart2 = useCallback(() => {
      let params = {
        cellRange: {
            rowStartIndex: 0,
        rowEndIndex: 4,
          columns: ['_id', 'name','price',],
        },
        chartType: 'groupedBar',
        chartThemeName: 'ag-pastel',
        chartThemeOverrides: {
          common: {
            title: {
              enabled: true,
              text: 'Todos los usuarios',
            },
            
          },
        }
        
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
       {
        active ? <FormProduct estado={stateModel} /> : null
       }
        <div className="panel_opciones bg-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
          <div className="plus_panel flex justify-between items-center">
          <section className="items-center flex">
            
              <div className="users flex items-center mx-2">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#3498DB" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"/></svg>
                </span>
                <span className="text-[#3498DB] mx-1">Productos</span>
                <span className="text-[#3498DB] mx-1">{dataProduct.length}</span>
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
            <button onClick={()=>setActive(!active)
            } className=" bg-[#1daf53] text-white flex items-center p-1 rounded-md border">
              <img src={plus} alt="" />
              Crear producto
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
            
         <div className="panel_analitic block  my-2">
         
              <div className="content flex ">
        <div className="inactive flex items-center ">
        <div className=" bg-white p-2 rounded-lg mx-1">
        <span className="text-green-500 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861zM21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958v5.76z"/><path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816zM5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1z"/></svg>
          
          <span>Caducidad  </span></span>
        </div>
        <div className="bg-white p-2 rounded-lg">
        <span className="text-[red] flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861zM21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958v5.76z"/><path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816zM5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1z"/></svg>
             <div className="span mx-1">Caducidad</div></span>
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
            rowData={
            
              dataProduct.map((item) => {
                return {
                  _id: item._id,
                  name: item.name,
                  description: item.description,
                  price: ("$ "+item.priceBuy).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), // ponser signo de pesos
                  priceBuy: ("$ "+item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                  // ponser signo de pesos
                   caducidad:moment(item.fechaFin).endOf('day').fromNow(),
                 
                  
                  iva: ("0,"+item.iva+"%").toString().replace(/\B(?=(\d{2})+(?!\d))/g, ","),
                };
              })
            
            }
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
  