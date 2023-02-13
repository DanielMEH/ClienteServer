import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  
  faGlobe,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../assets/css/fuente.css";

export const Footer = () => {
  const fecha = new Date().getFullYear();
  console.log(fecha);
  return (
    <>
      <footer className="fotter_bg mt-36">
        <div className=" max-w-7xl mx-auto ">
        <div className="flex  justify-between">
          <div className="Slogan">
            <h2>Stored</h2>
            <p>

            </p>
          </div>
          <div className="serviceSection m-3">
            <ul>
              <li className=" ">
                <Link to={"/"} className="flex justify-between  items-center py-2 font-bold text-gray-800">
                  <span>Contactanos</span> 
                  
                  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Servicios  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Documentación  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Recursos para desarroladores  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Certificaciones  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Blogs  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Compañia  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
            </ul>
          </div>
          <div className="layautSection m-3">
            <ul>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Quienes somos  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Ayuda  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Como funciona stored  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Privacidad de datos  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Información legal  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Terminos Y condiciones  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
              <li className="my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center py-1 font-bold text-gray-800"> Hola  <FontAwesomeIcon icon={faChevronRight}/></Link></li>
            </ul>

          </div>
        <div className="w-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta temporibus ullam voluptatem aliquid ab nemo,
           fuga distinctio omnis, numquam rem ad? Repellendus quas cum labore, architecto accusantium velit sed!
        </div>
        </div>
        </div>
        <div className="datacopy  ">
          <div className="allsection flex justify-between items-center max-w-7xl mx-auto">
            <div className="enalces_items">
              <ul className="flex gap-8 p-4">
                <li className="relative  text-[1.1rem] text-cyan-900">
                  <span className="font-bold"> <FontAwesomeIcon icon={faGlobe}/> Español </span>
                </li>
                <li className="relative lik  text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline">Política de privacidad </Link>
                </li>
                <li className="relative lik text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline">Términos</Link>
                </li>
                <li className="relative lik text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline">Trabaja con nosotros</Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900">
                  <Link to={"/"}>Copyright &copy; {fecha} | Stored</Link>
                </li>
              </ul>
            </div>
            <div className="redes_Link flex">
              <span><Link to={"/instagram"}>
              <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/instagram-new.png"/>
              </Link></span>
              <span>
                <Link to={"/tittwe"}>
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/twitter.png"/>
                </Link>
              </span>
              <span>
                <Link to={"/facebook"}>
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/facebook.png"/>
                </Link>
              </span>
              <span>
                <Link to={"linkeding"}>
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/linkedin.png"/>
                </Link>
              </span>
              <span>

                <Link to={"github"}>
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/github.png"/>
                </Link>
              </span>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
