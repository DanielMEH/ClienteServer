import { useState } from "react";
import { Link,  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faAngleRight, faHome, faUser, faCircleUser,faLayerGroup,
faCloud,faHeart,faAddressBook,faHandshake,faGear } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';
import "../assets/css/fuente.css";
export const Header = () => {

  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("activeBody");
  }else{
    document.body.classList.remove("activeBody");
  }
    
  
  
  return (

    <div className="heander_bg">
    <div className="heand1">
    <div className="menu_l flex items-center justify-between">
        <div className="title">
        <div className="d">
            <h1 className="text-[#1876F2] text-3xl font-bold ml-4 my-1 ">
              Stored
            </h1>
          </div>
        </div>
      <div className="menu_bars" onClick={()=> {
        if (show === false) {
          setShow(true);
        } else {
          setShow(false);
          
        }
      }}>
          <span className={show === true ?"menu_bar__item1 active":
        "menu_bar__item1" }>

        </span>
          <span className={show === true ?"menu_bar__item2 active":
        "menu_bar__item2" }></span>
          <span className={show === true ?"menu_bar__item3 active":
        "menu_bar__item3" }></span>
      </div>
      </div>
    </div>
    <div className={show === true ? "lateralbg":""}>
    <div className={show === true ? "menu_lateral activ_Lateral":"menu_lateral "} >
      <div className="sec1">
        <div className="t">
          <h2 className="p-[6px]">Menu</h2>
          <hr />
          <div className="list">
            <ul>
              <li>
                <Link to={"/"} className="clup">
                  <span><FontAwesomeIcon icon={faHome}
                  className="text-slate-500"/> 
                  <span className="ml-2 font-medium">Inicio</span>
                  </span>
                  
                   <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/login"} className="clup">
               <span> <FontAwesomeIcon icon={faUser}
                  className="text-slate-500 "/> <span className="ml-2">
                    Iniciar sesión</span></span>
                
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/signup"} className="clup">

                  <span><FontAwesomeIcon icon={faCircleUser} 
                  className="text-slate-500  "/> <span className="ml-2 font-medium">Crear cuenta</span></span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sec1">
        <div className="t  ">
          <h2 className="my-2 mx-2 block">Más</h2>
          <hr className="border-[#1876F2]"/>
          <div className="list">
            <ul>
              <li>
                <Link to={"/"}className="clup">
                  <span> <FontAwesomeIcon icon={faLayerGroup}
                  className="text-slate-500"/> <span className="ml-2 font-medium">Nuestra plataforma</span> </span>
                <FontAwesomeIcon icon={faAngleRight}  className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/"}className="clup">
                  <span> <FontAwesomeIcon icon={faCloud}
                  className="text-slate-500"/> <span className=" ml-2 font-medium">Servicios</span></span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/"}className="clup">
                  <span> <FontAwesomeIcon icon={faHeart}
                  className="text-slate-500"/> 
                  <span className=" ml-2 font-medium"> Stored</span> </span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sec1">
        <div className="t">
          <h2 className="my-2 mx-2 block">Ayuda</h2>
          <hr className="border-[#1876F2]"/>
          <div className="list">
            <ul>
              <li className="
            ">
                <Link to={"/"}className="clup " >
                  <span> <FontAwesomeIcon icon={faAddressBook}
                  className="text-slate-500"/> <span className=" ml-2 font-medium"> Contáctanos</span></span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/"}className="clup" >
                  <span>
                  <FontAwesomeIcon icon={faHandshake}
                  className="text-slate-500"/> <span className=" ml-2 font-medium">Servicio al cliente</span></span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
              <li>
                <Link to={"/"}className="clup" >
                  <span> <FontAwesomeIcon icon={faGear}
                  className="text-slate-500"/> <span className=" ml-2 font-medium">Ajustes</span></span>
                <FontAwesomeIcon icon={faAngleRight} className=" mx-3"/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
      <header className=" hed_responsive border-b-2 py-1 border-gray-100  flex w-full justify-around items-center  ">
        <div className=" flex  items-center">
          <div className="self_t">
            <h1 className="text-[#1876F2] text-3xl font-bold ml-2 my-1  mr-1">
              Stored
            </h1>
          </div>

          <div className="w-full">
            <nav className=" nav_header">
              <ul className=" m-0 sellf1 flex ">
                <li className="relative lik p-1 mx-2 text-[1.1rem] text-cyan-900 todoFont">
                  <NavLink to="/" className="nav-item font-bold   inline-block relative ">
                    Inicio
                  </NavLink>
                </li>
                <li className="relative lik mx-2 p-1 text-[1.1rem] text-cyan-900 todoFont">
                  <NavLink to="/services" className="nav-item font-bold    inline-block relative ">
                    Servicios
                  </NavLink>
                </li>
                <li className="relative lik mx-2 p-1 text-[1.1rem] text-cyan-900 todoFont">
                  <NavLink to="/somos" className="nav-item font-bold  inline-block relative ">
                   Quiénes somos
                  </NavLink>
                </li>
                <li className="relative lik mx-2 p-1 text-[1.1rem] font-bold  text-cyan-900 todoFont">
                  <NavLink to="/contactanos" className="nav-item  inline-block relative  ">
                    Contáctanos
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className=" ">
          <form>
            <div className="inpit w-full lg:w-80 rounded-lg shadow-md border border-gray-300 items-center  px-2  flex">
              <div className="w-full">
                <input
                  type="text"
                  name="search"
                  placeholder="Búsqueda rápida... "
                  className=" block w-full px-2 py-2 bg-transparent
                  text-cyan-900 
                  outline-none"
                />
              </div>
              <div className="sea">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-300 text-xl  top-1 block"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <ul className="mx-2 flex dad">
            <li className=" ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? " py-2 relative dad1 text-[1.1rem] active font-bold text-cyan-900"
                    : " py-2 relative dad1 text-[1.1rem] lik font-bold text-cyan-900"
                }
              >
                Iniciar sesión
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? `mx-4 border p-1.5 font-bold  text-[1.1rem] bg-[#1876F2] todoFont px-4 text-white
                     hover:bg-white dad1 duration-200 hover:text-[#1876F2] rounded-full border-[#1876F2]`
                    : " text-cyan-900 mx-4 border dad1 font-bold  p-1.5 text-[1.1rem] todoFont px-4 hover:bg-[#1876F2] duration-200 hover:text-white rounded-full border-[#1876F2]"
                }
              >
                Crear cuenta
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
