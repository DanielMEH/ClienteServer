import React from 'react'
import img from "../assets/img/fondo.jpg"
import { Link } from 'react-router-dom'
export const NotFount = () => {
  return (
    <>
    <img src={img} alt="not found" className='w-2/5 justify-center flex mx-auto'/>
    <h1 className='text-center items-center 
     p-4 text-2xl'>
        No se encontro la ruta solicitada 
        <Link to='/'
        className='text-underlined text-blue-500'
        > Regresar al inicio</Link>

    </h1>
    </>
  )
}
