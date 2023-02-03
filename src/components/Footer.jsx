
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faLikedinIn, faGithub } from "@fortawesome/free-solid-svg-icons";
import React from 'react'


export const Footer=() =>{
  return (
    <>          
     <footer className="bg-white text-center lg:text-left">
      <div className="container p-6">
        <div className="flex justify-between p-10">
          <div className="mb-6">
            <h5 className="font-bold mb-2.5 text-gray-800">Siguenos en nuestras redes</h5>
            <h5 className="text-[#1876F2] text-2xl font-medium">Stored</h5>
          </div>
          <div className="mb-6">
            <h5 className="font-medium mb-2.5 text-gray-800">Más</h5>
    
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-[#545454]">Uso de cookies</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Nuestra prensa</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Novedades</a>
              </li>
            </ul>
          </div>
    
          <div className="mb-6">
            <h5 className="font-medium mb-2.5 text-gray-800">Ayuda</h5>
    
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-[#545454]">Como funciona stored</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Contáctanos</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Trabaja con nosotros</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Privacidad de datos</a>
              </li>
              <li>
                <a href="#!" className="text-[#545454]">Quienes somos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-[#545454] m-5">Vistas: 22,44</p>
      <div className="flex justify-between text-gray-700 text-center p-4 border-t-4 border-[#DADADB]">
        <p>
          © Todos los derechhos reservados 2022 | Stored
        </p>
        <div className="flex justify-evenly w-96">
          <a href="#!" className="text-[#545454]">Privacidad</a>
          <a href="#!" className="text-[#545454]">Términos y condiciones</a>
          <a href="#!" className="text-[#545454]">Seguridad</a>
        </div>
        </div>
    </footer> 
    </>
  )
}