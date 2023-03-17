import React from 'react'
import { MenuLateral } from '../components/MenuLateral'
import { DataTableUsers } from '../components/DataTableUsers'

export const Product = () => {
  
  return (
    <>
    <div className='flex'>
    <MenuLateral/>
    <div className=' w-full block self_conte_fond '>


      <div className="content_users m-7">
        <div className="content_users_title">
          <h2 className='text-4xl font-bold text-gray-700 font-sans mx-0'>Productos</h2>
          <p className='text-xl text-gray-600 mx-0'>Crea, administra y haz un seguimiento de tus productos en un solo lugar.</p>
             
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
