import React from 'react'
import { MenuLateral } from '../components/MenuLateral'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { DataTableUsers } from '../components/DataTableUsers';
import "../assets/css/fuente.css";
export const Usuarios = () => {
  return (
   <>
     <div className='flex'>
    <MenuLateral/>
    <div className=' w-full block self_conte_fond '>


      <div className="content_users m-7">
        <div className="content_users_title">
          <h2 className='text-3xl font-bold text-gray-700 font-sans mx-20'>Usuarios</h2>
          <p className='text-xl text-gray-600 mx-20'>Crea, administra y haz un seguimiento de  tus usuarios en un solo lugar.</p>
             
        </div>

        <div className="container_cont">
          
          <DataTableUsers/>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}
