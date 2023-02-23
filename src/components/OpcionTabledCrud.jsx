import React from 'react'

function OpcionTabledCrud(e) {
    const deleteId = () => {
        console.log(e.data.id)
    }
    const editId = () => {
        console.log(e.data.id)
    }
    const isAlowedId = () => {
        console.log(e.data.id)
    }
  return (
    <div>

        <button onClick={editId}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="#ccc" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg></button>
        <button
        
        onClick={deleteId} class="icon-sm text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="red" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        <button onClick={isAlowedId}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="#28D87D" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></button>
       
    </div>
  )
}

export default OpcionTabledCrud