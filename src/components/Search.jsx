import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom"



import React from 'react'

export const Search=() =>{
  return (
    <>          
            <div className="flex py-3 px-8">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-96 px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-full" placeholder="Que deseas buscar?"  aria-label="Search" aria-describedby="button-addon2"/>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
    </>
  )
}