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

        <button
        
        onClick={deleteId}>Eliminar</button>
        <button onClick={editId}>Editar</button>
        <button onClick={isAlowedId}>Permisos</button>
       
    </div>
  )
}

export default OpcionTabledCrud