import { AG_GRID_LOCALE_EN } from "../locale/locale";
import React, {
    useMemo,useCallback, useRef} from 'react'
import "../assets/css/styleSlider.css"
export const ChackSelection = () => {
    
      
 const defaultColDef = useMemo(() => {
        return {
          sortable: true,
          resizable: true,
          filter: true,
          floatingFilter: true,
          flex: 1,
          minWidth: 100,
          localeText: AG_GRID_LOCALE_EN,
          editable: true,
          
        };
      }, []);
      return defaultColDef
     
}

export var checkboxSelection = function (params) {

    return params.columnApi.getRowGroupColumns().length === 0;
  };
 export  var headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  export const setPrinterFriendly = (api) => {
    const eGridDiv = document.querySelector("#myGrid");
    eGridDiv.style.width = "";
    eGridDiv.style.height = "";
    api.setDomLayout("print");
  };

 export  const setNormal = (api) => {
    const eGridDiv = document.querySelector("#myGrid");
    eGridDiv.style.width = "90%";
    eGridDiv.style.height = "600px";
    api.setDomLayout();
  };



