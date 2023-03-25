import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  
  faGlobe,
  
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../assets/css/fuente.css";

export const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <>
      <footer className="fotter_bg  lg:mt-36 pt-10">
        <h2 className="text-[#2e86c1] mx-6 block text-2xl font-bold">Invensys</h2>
        <div className=" max-w-7xl mx-auto ">
        <div className="flex  justify-between">
          <div className="mx-3 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
          <div className="Slogan hidden lg:block">
          <h2 className="text-[#1876F2] text-3xl font-bold ml-2 my-1  mr-1">
              Invensys
            </h2>

            <p className="w-48 ml-2">
              Impulsamos la economía de tu negocio
              aumentando la productividad de tu trabajo.  
            </p>
          </div>
          <div className="serviceSection m-3">
            <ul>
            <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Servicios  </Link></li>

              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Servicios  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Documentación  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 "> Recursos para desarroladores  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Certificaciones  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Blogs  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Compañia  </Link></li>
            </ul>
          </div>
          <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>
          <div className="layautSection m-3">
            <ul>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Quienes somos  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Ayuda  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Como funciona stored  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Privacidad de datos  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Información legal  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Terminos Y condiciones  </Link></li>
              <li className="md:my-1"><span className="circle-f"></span><Link to={"/"} className="flex justify-between  items-center md:py-1 hover:underline text-gray-800"> Hola  </Link></li>
            </ul>

          </div>
          <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>

        <div className="w-48 mx-4 mt-4 md:mt-0">
          <article>
            <strong>Suscríbete a nuestro plataforma</strong>
            <p>
Obtenga actualizaciones de productos, novedades de la compañía y más.</p>
          </article>
          <Link to={"/suscribete"}
          className="border border-[#1876F2] p-2 rounded shadow-lg hover:shadow-blue-500/50  mt-2 inline-block">Suscribete</Link>
        </div>
          </div>
        </div>
        </div>
        <div className="datacopy  overflow-x-scroll ">
          <div className="allsection flex justify-between items-center max-w-7xl mx-auto">
            <div className="enalces_items">
              <ul className="flex gap-8 p-4">
                <li className="relative  text-[1.1rem] text-cyan-900  whitespace-nowrap">
                  <span className="font-bold "> <FontAwesomeIcon icon={faGlobe}/> Español </span>
                </li>
                <li className="relative   text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline whitespace-nowrap">Política de privacidad </Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline  whitespace-nowrap">Términos</Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900">
                  <Link to={"/"} className="text-underline  whitespace-nowrap">Trabaja con nosotros</Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900  whitespace-nowrap">
                  <Link to={"/"}>Copyright &copy; {fecha} | Stored</Link>
                </li>
              </ul>
            </div>
            <div className="redes_Link flex">
              <span><a href="">
              <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/instagram-new.png" alt="redes"/>
              </a></span>
              <span>
                <a href="/tittwe">
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/twitter.png" alt="redes"/>
                </a>
              </span>
              <span>
                <a href="https://web.facebook.com/profile.php?id=100090067700904">
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/facebook.png" alt="redes"/>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/stored-proyecto-84a285266/">
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/linkedin.png" alt="redes"/>
                </a>
              </span>
              <span>

                <a href="https://github.com/Stored1223">
                <img width={"50px"} src="https://img.icons8.com/cute-clipart/64/null/github.png" alt="redes"/>
                </a>
              </span>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
