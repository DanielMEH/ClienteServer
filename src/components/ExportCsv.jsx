import React,{useRef,useCallback} from 'react'


 export  const ExportCsv = ()=>{

        const gridRef = useRef();
        const onBtnExport = useCallback(() => {
            gridRef.current.api.exportDataAsCsv();
          }, []);
          return onBtnExport();
    }
 