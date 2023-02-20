import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fuente.css";
import user from "../assets/icons/user-check.svg";
import users from "../assets/icons/users.svg";
import calendar from "../assets/icons/calendar.svg";
import bell from "../assets/icons/bell.svg";
import home from "../assets/icons/home.svg";
import chart from "../assets/icons/bar-chart.svg";
import comand from "../assets/icons/command.svg";
import help from "../assets/icons/help-circle.svg";
import send from "../assets/icons/send.svg";
import settings from "../assets/icons/settings.svg";
import start from "../assets/icons/star.svg";
import grid from "../assets/icons/grid.svg";
import harddrive from "../assets/icons/hard-drive.svg";
import truck from "../assets/icons/truck.svg";
import cloceSession from "../assets/icons/log-out.svg";

export const MenuLateral = () => {
  const hundleClick = () => {
    localStorage.removeItem("secure_token");
    localStorage.removeItem("perfil_rol");
    localStorage.removeItem("auth_cuenta");
    localStorage.removeItem("response_auth");
    window.location.href = "/login";
  };
  const fecha = new Date().getFullYear();
  return (
    <div className="fixed 
    hover:scrollbar
     hover:scrollbar-thumb-gray-200 
    hover:scrollbar-track-gray-100 
    hover:scrollbar-w-0
     hover:scrollbar-thumb-rounded-full
    hover:scrollbar-track-rounded-full
    scrollbar scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-w-0 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
    h-full  w-60 bg-white shadow-2xl shadow-teal-300/20  ">
      <div className="contenedor__mL h-full flex flex-col gap-1 justify-between">
        <div className="section-1">
          <h2 className="text-center sticky top-0 bg-white z-20 block text-xl font-bold py-2 border-b text-neutral-800">
            Identificate
          </h2>
          <div className="contenedor_perfil_count flex">
            <NavLink
              to={"/perfil"}
              className="contenedor_perfil rounded my-1 border w-full mx-1 flex items-center relative p-1"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHM9q8xoTwiTtydq44Th2pdu-P27I3Xs3M26EdMFZY5jacGnNnQ_jQ0gqBsvlmDxpvkxA&usqp=CAU"
                alt="perfil"
                className="w-8"
              />
              <div className="administrador mx-1">Administrador</div>
              <div className="activ absolute w-2 h-2 bg-green-400 rounded-full  right-1 top-1 "></div>
            </NavLink>
          </div>
          <div className="items_list_roles">
            <ul className="p-0 m-0">
              <li>
                <NavLink
                  to={"/dasboard"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                            flex 
                            bg-gray-100
                            items-center 
                             mx-1 mt-3  p-2 font-medium text-black
                             rounded `
                      : `flex 
                             hover:bg-gray-100
                             items-center 
                              mx-1 mt-3  p-2 font-medium text-black
                              rounded `
                  }
                >
                  <img src={home} alt="" width={20} />
                  <div className="NavLinks1 pt-[2px] ml-3 whitespace-nowrap">
                    Inicio
                  </div>
                </NavLink>
              </li>
              <li className="p-0 m-0">
                <NavLink
                  to={"/perfil"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1 my-[2px]  p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1  my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={user} alt="" width={20} />
                  <div className="NavLinks1 pt-[2px] ml-3">Perfil</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/usuarios"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={users} alt="" width={20} />
                  <div className="NavLinks7 pt-[2px] ml-3 whitespace-nowrap">
                    Usuarios
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/notificaciones"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={bell} alt="" width={20} />
                  <div className="NavLinks7 pt-[2px] ml-3 whitespace-nowrap ">
                    Notificaciones
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/inventario"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={grid} alt="" width={20} />
                  <div className="NavLinks2 pt-[2px] ml-3 whitespace-nowrap">
                    inventario
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/productos"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={comand} alt="" width={20} />
                  <div className="NavLinks3 pt-[2px] ml-3 whitespace-nowrap">
                    Productos
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/categorias"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={harddrive} alt="" width={20} />
                  <div className="NavLinks4 pt-[2px] ml-3 whitespace-nowrap">
                    Categorias
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/proveedores"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={truck} alt="" width={20} />
                  <div className="NavLinks5 pt-[2px] ml-3 whitespace-nowrap">
                    Proveedores
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/estadisticas"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={chart} alt="" width={20} />
                  <div className="NavLinks6 pt-[2px] ml-3 whitespace-nowrap">
                    Estadisticas
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/planificadora"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={calendar} alt="" width={20} />
                  <div className="NavLinks6 pt-[2px] ml-3 whitespace-nowrap">
                    Planificadora
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                 <button onClick={hundleClick} className="flex 
                         hover:bg-gray-100
                         items-center 
                         
                            font-medium text-black
                          rounded ">
                  <img src={cloceSession} alt="" width={20} />
                  <div className="pt-[2px] ml-3 whitespace-nowrap"> Cerrar sesión</div>
                </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-2">
          <div className="items-2">
            <ul>
              <li className="mt-20">
                
              </li>
              <li>
                <NavLink
                  to={"/settings"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={settings} alt="" width={20} />
                  <div className="pt-[2px] ml-3 whitespace-nowrap">
                    Configuración
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ayudaAdmin"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={help} alt="" width={20} />
                  <div className="pt-[2px] ml-3 whitespace-nowrap">Ayuda</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/reportes"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={send} alt="" width={20} />
                  <div className="pt-[2px] ml-3 whitespace-nowrap">
                    Enviar reporte
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/startAdmin"}
                  className={({ isActive }) =>
                    isActive
                      ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1  my-[2px] p-2 font-medium text-black
                         rounded `
                      : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 my-[2px] p-2 font-medium text-black
                          rounded `
                  }
                >
                  <img src={start} alt="" width={20} />
                  <div className="pt-[2px] ml-3 whitespace-nowrap">
                    Calificanos
                  </div>
                </NavLink>
              </li>
              <div className="mx-2 p-2 text-gray-400 text-sm ">&copy; {fecha} | stored</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
