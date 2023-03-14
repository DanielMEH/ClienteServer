import React, { useState, useEffect } from "react";
import { MenuLateral } from "../components/MenuLateral";
import "../assets/css/styleSlider.css";
import { CambioFotoPerfilAdmin } from "../components/CambioFotoPerfilAdmin";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate, Link } from "react-router-dom";

export const Perfil = () => {
  const { getAdminDataAll, adminGetData, updateDataAdmin } = useGetUsers();
  const [btnSpand, setbtnSpand] = useState(false);
  const [modelImg, setModelImg] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
 
  useEffect(() => {
    const initial = async () => {
      const initials = await getAdminDataAll();
      setData(initials);
      setLoading(false);
    };
    initial();
  }, []);

  const handleBtnSpand = () => {
    setbtnSpand(true);
  };

  const handleImg = () => {
    setModelImg(!modelImg);
  };

  if (modelImg === true) {
    setTimeout(() => {
      setModelImg(false);
    }, 22000);
  }

  const handleData = async (e) => {
    e.preventDefault();

    setLoad(false);
    
    let data = {
      name: e.target.name.value,
      empresa: e.target.empresa.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      document: e.target.document.value,
      id:localStorage.getItem("id_admin")
    };
    const response = await updateDataAdmin(data);
    setLoad(true);

    
      navigate("/perfil");
      window.location.reload();
 
  };
  return (
    <>
      {modelImg === true ? (
        <CambioFotoPerfilAdmin handleImg={handleImg} />
      ) : null}

      <div className="flex">
        <MenuLateral />
        <div className="bg-[#eef9fd] w-full block">
          <div className="container_perfil max-w-7xl mx-auto relative flex ">
            <div className={btnSpand ? "cubo_p block" : "hidden"}></div>
            <div>
              <div
                className={
                  btnSpand
                    ? `
    panel_Editar_P rounded-lg h-[36rem] absolute shadow-xl right-[33rem] shadow-gray-400
    bg-white w-[22rem] z-20 top-6 overflow-hidden block duration-300 ease-out opacity-100
    `
                    : `panel_Editar_P rounded-lg h-[36rem] absolute shadow-xl right-[33rem] shadow-gray-400
    bg-white w-[22rem] z-20 top-6 overflow-hidden hidden opacity-0`
                }
              >
                <div className="editar bg-green-100 p-4 flex flex-col">
                  <div className="xc flex justify-between relative">
                    <span>Editar Perfil</span>

                    <span
                      onClick={() => setbtnSpand(!btnSpand)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          fill="#c1c7ce"
                          d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                        />
                      </svg>
                    </span>
                  </div>
                  <span>Manten tus datos actualizados</span>
                </div>
                <div className="inputsDatos">
                  {adminGetData.map((item) => (
                    <form className="flex flex-col" onSubmit={handleData}>
                      <h2 className="text-gray-600 text-xl my-2 text-center font-sans font-medium">
                        Datos personales
                      </h2>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="nombre" className="py-1">
                          Nombre:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                              >
                                <mask id="ipSEditName0">
                                  <g
                                    fill="none"
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  >
                                    <circle cx="24" cy="11" r="7" fill="#fff" />
                                    <path d="M4 41c0-8.837 8.059-16 18-16" />
                                    <path
                                      fill="#fff"
                                      d="m31 42l10-10l-4-4l-10 10v4h4Z"
                                    />
                                  </g>
                                </mask>
                                <path
                                  fill="#ccc"
                                  d="M0 0h48v48H0z"
                                  mask="url(#ipSEditName0)"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="name"
                                id="apellido"
                                defaultValue={item.name}
                                className=" py-1 rounded-sm focus:border-1 outline-none
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Nombre Empresa o local:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12Z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="empresa"
                                id="apellido"
                                defaultValue={item.nombreTienda}
                                className=" py-1 rounded-sm focus:border-1 outline-none
                                
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Documento:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="#ccc"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                >
                                  <path d="M19 20H5c-1.6 0-2-1.333-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6m2 8c-.667 0-2-.4-2-2v-6m2 8c1.6 0 2-1.333 2-2v-6h-4" />
                                  <path d="M7 16h6m-1-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
                                </g>
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="document"
                                defaultValue={item.document}
                                id="apellido"
                                className=" py-1 rounded-sm focus:border-1 outline-none
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="telefono" className="py-1">
                          Telefono:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="telefono"
                                id="apellido"
                                defaultValue={item.telefono}
                                className=" py-1 rounded-sm focus:border-1 outline-none
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Correo:
                        </label>
                        <div className="inpusts flex border relative">
                          <div
                            className="absolute w-full h-full 
                          cursor-not-allowed
                          bg-gray100/30 top-0"
                          ></div>
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="M12 18.2c0-.96.5-1.86 1.2-2.46v-.24c0-2.44 2.2-4.5 4.8-4.5c1.65 0 3.13.83 4 2.06V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h8v-1.8M4 6l8 5l8-5v2l-8 5l-8-5V6m16.8 11v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V17Z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="email"
                                id="apellido"
                                value={item.correo}
                                className=" py-1 rounded-sm focus:border-1 outline-none
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input mx-2">
                      {
                        load === false? (
                          <button
                          type="button"
                          className="bg-green-400 text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-green-500 hover:shadow-lg justify-center p-2
                          disabled flex items-center"
                        >
                         <svg className="animate-spin mr-1 flex justify-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingFill0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient><linearGradient id="mingcuteLoadingFill1" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stop-color="currentColor" stop-opacity="0"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient></defs><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="url(#mingcuteLoadingFill0)" d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z" transform="translate(1.5 1.625)"/><path fill="url(#mingcuteLoadingFill1)" d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z" transform="translate(1.5 1.625)"/></g></svg>
                          Espere un momento...
                        </button>
                        ):(
                        <button
                          className="bg-green-400 text-white block w-full rounded-sm mt-3 p-2
              duration-300 hover:bg-green-500 hover:shadow-lg "
                        >
                          <div className="span">
                          Actualizar Datos
                          </div>
                        </button>

                        )
                      }
                      </div>
                    </form>
                  ))}
                </div>
              </div>
            </div>
            {loading === true ? (
              <div className="c_perfil bg-white w-96 rounded-lg relative    mt-6 overflow-hidden">
                <div
                  style={{
                    display: "block",

                    width: "100%",
                    height: "8rem",
                  }}
                >
                  <Skeleton height={"100%"} width={"100%"} />
                </div>

                <div className="text-center mb-4 mt-[-3rem] ">
                  <Skeleton height={100} width={100} circle={true} />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>

                <div className="mx-4  ">
                  <Skeleton
                    count={6}
                    width={"70%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
                <div className="flex ml-3 gap-1">
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"70%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="c_perfil bg-white w-96 rounded-lg relative   mt-6 overflow-hidden">
                <div className="edidarPerfilAdmin absolute z-40 w-full">
                  <button
                    onClick={handleBtnSpand}
                    className="absolute z-10 top-0 right-1 mx-1 mt-1 cursor-pointer inline-block
       bg-green-400
       text-white rounded-md p-1"
                  >
                    Editar perfil
                  </button>
                </div>

                <div className="container_perfil__img  relative  bg-blue-100 rounded-4">
                  <div className="fond ">
                    <img
                      className="h-[8rem] w-full object-cover"
                      src="https://img.freepik.com/vector-gratis/burbujas-agua-blanda-brillante-sobre-fondo-azul_1017-31491.jpg?w=826&t=st=1678282592~exp=1678283192~hmac=53ea8ee6aa49fae595fc6b9b61a027c8184ab2a6063515af296d60e61dcfe85f"
                      alt=""
                    />
                  </div>
                  <div className="avater">
                    <picture className="skew-y-12 rounded-full ">
                      {adminGetData.map((item) => (
                        <div key={item.idUsers}>
                          {item.imgURL ? (
                           <a href={item.imgURL} className="">
                            <img
                              key={item.id}
                              className="z-30 bg-clound t-8 block absolute rounded-full top-[5rem] left-[8.30rem]"
                              width={110}
                              src={item.imgURL}
                              alt="imagen de perfil"
                            />
                           </a>
                          ) : (
                            <img
                              className="z-30 t-8 block absolute rounded-full top-[5rem] left-[8.30rem]"
                              width={110}
                              src="https://www.ecured.cu/images/thumb/a/a1/Ejemplo_de_Avatar.png/260px-Ejemplo_de_Avatar.png"
                              alt="imagen de perfil"
                            />
                          )}
                        </div>
                      ))}
                    </picture>
                    <button
                      onClick={handleImg}
                      className="absolute top-[9.6rem] z-50 left-[13.20rem] bg-red-400 w-6 cursor-pointer"
                    >
                      <div className="relative cursor-pointer">
                        <input
                          type="file"
                          hidden
                          className="absolute w-full bg-blue-600 z-20 opacity-0 cursor-pointer"
                        />
                        <div className="icon absolute bg-slate-400 rounded-full p-[1px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {adminGetData.map((item) => (
                  <div className="content_contenido_p" key={item.idUsers}>
                    <div className="bg-white">
                      <ul className="list-none_k">
                        <li className="flex  flex-col py-2 px-4 ">
                          <h2 className="mt-14 pb-3 text-2xl font-sans mx-0 font-bold text-gray-700">
                            Datos personales
                          </h2>
                          <hr className="mb-4" />
                          <span className="text-lg flex items-center font-sans mx-0">
                            {loading === true ? (
                              <span
                                style={{
                                  width: "70%",
                                  borderRadius: "100px",
                                  overflow: "hidden",
                                }}
                              >
                                {}
                                {<Skeleton />}
                              </span>
                            ) : (
                              <span className="flex">
                                {loading === false ? (
                                  <div className="mr-1">Nombre completo: </div>
                                ) : null}

                                {item.name ? item.name : "..."}
                              </span>
                            )}
                          </span>

                          <span className="text-lg flex items-center  font-sans mx-0">
                            {loading === true ? (
                              <span
                                style={{
                                  width: "70%",
                                  borderRadius: "100px",
                                  overflow: "hidden",
                                }}
                              >
                                {}
                                {<Skeleton />}
                              </span>
                            ) : (
                              <span className="flex">
                                {loading === false ? (
                                  <div className="mr-1">Documento: </div>
                                ) : null}

                                {item.document ? item.document : "..."}
                              </span>
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0 flex items-center">
                            Cuenta:
                            {item.authCuenta === "OK" ? (
                              <>
                                <img
                                  className="w-5 ml-2 block"
                                  src="https://img.icons8.com/ios/50/40C057/ok--v1.png"
                                  alt=""
                                />
                                <span className="text-green-400">
                                  {" "}
                                  verificado
                                </span>
                              </>
                            ) : (
                              "Hubo un error en la cuenta"
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            Estado:
                            {item.estado === "activo" ? (
                              <span className="text-green-400 mx-1">
                                {item.estado}
                              </span>
                            ) : (
                              <span className="text-red-400 mx-1">
                                {item.estado}
                              </span>
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0 flex">
                            Correo:{" "}
                            <span
                              style={{
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                              className="ml-2"
                            >
                              {item.correo ? item.correo : "..."}
                            </span>
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            Rol: <span>{item.rol ? item.rol : "..."}</span>
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            <span className="mr-1">Telefono: </span>

                            {item.telefono ? item.telefono : "..."}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
                <span>
                  <a
                    href="/notificaciones"
                    className="bg-gray-100 rounded-lg
       w-[90%] mx-auto my-2 p-2 flex
        justify-between"
                  >
                    <span>Notificaciónes:</span>{" "}
                    <span className="bg-red-500 text-white px-1  rounded-full">
                      +9
                    </span>
                  </a>
                </span>
                <div className="bg-white p-3 hover:shadow">
                  <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Usuarios Creados</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                        alt=""
                      />
                      <a href="/" className="text-main-color">
                        Leidy
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                        alt=""
                      />
                      <a href="/" className="text-main-color">
                        Javier
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                        alt=""
                      />
                      <a href="/" className="text-main-color">
                        Faryd
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://www.morganstanley.com/content/dam/msdotcom/articles/women-listicle/debashree-banerjee-circle.jpg"
                        alt=""
                      />
                      <a href="/" className="text-main-color">
                        Fernanda
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {loading === true ? (
              <div className="w-full md:w-9/12 mt-6 mx-2 h-full bg-white">
                <div
                  style={{
                    display: "block",

                    width: "100%",
                    height: "8rem",
                  }}
                >
                  <Skeleton height={"100%"} width={"100%"} />
                </div>

                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>

                <div className="mx-4  ">
                  <Skeleton
                    count={6}
                    width={"70%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
                <div className="flex ml-3 gap-1">
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"70%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"50%"}
                    className="rounded-full bg-red-600 overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full md:w-9/12 mt-6 mx-2 h-64">
                {adminGetData.map((items) => (
                  <div
                    className="bg-white p-3 shadow-sm rounded-sm"
                    key={items.idUsers}
                  >
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">
                        Información adicional
                      </span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Nombre</div>
                          <div className="px-4 py-2">
                            {items.name ? items.name : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Cuenta con:{" "}
                          </div>
                          <div className="px-4 py-2">
                            {items.cuenta ? items.cuenta : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">CC</div>
                          <div className="px-4 py-2">
                            {items.document ? items.document : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Pais:</div>
                          <div className="px-4 py-2">
                            {items.pais ? items.pais : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Nombre Tienda
                          </div>
                          <div className="px-4 py-2">
                            {items.nombreTienda ? items.nombreTienda : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Ubicacion Tienda
                          </div>
                          <div className="px-4 py-2">
                            {items.ciudad ? items.ciudad : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Ciudad:{" "}
                          </div>
                          <div className="px-4 py-2">
                            <span
                              className="text-blue-800"
                              href="daniel@gmail.com"
                            >
                              {items.ciudad ? items.ciudad : "..."}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold flex">
                            Creación
                          </div>
                          <div className="flex">
                            <div className="px-4 py-2">
                              {items.fechaCreacion
                                ? items.fechaCreacion
                                : "..."}
                            </div>

                            <div className=" py-2">
                              {items.hora ? items.hora : "..."}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                      Ver más
                    </button>
                  </div>
                ))}

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Proveedores </span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952
                             11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.
                             078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Terminado</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">Productos - Arroz</div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">Lacteos</div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Usuarios </span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="16.5"
                              cy="12"
                              r="2.5"
                              fill="#fff"
                              opacity=".5"
                            />
                            <path
                              fill="#22c55e"
                              d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11zm0 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Estado</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-green-400">Activo</div>
                          <div className="text-gray-500 text-xs">
                            Justo ahora
                          </div>
                        </li>
                        <li>
                          <div className="text-red-500">Inactivo</div>
                          <div className="text-gray-500 text-xs">
                            Hace: <span>10min</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
