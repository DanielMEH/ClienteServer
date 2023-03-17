import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment-with-locales-es6'
export const Prueba = () => {

	const date = new Date().getDate()
	let fecha = moment().format('Do  MMMM YYYY, h:mm:ss a');

	console.log(fecha);
	
  return (
	<>
	
	<Skeleton />

    
	</>
  )
}
