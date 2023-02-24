import React, {
   
    useCallback, useRef
  } from "react";



export const Filter = () => {
const gridRef = useRef();
 const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  return onFilterTextBoxChanged;
}
