import React, { useState } from "react";
import "../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faCircleQuestion,
  faEye,
  faEyeSlash,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import "../assets/css/spiner.css";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
export const AuthUser = () => {
  const token = localStorage.getItem("secure_token");
  const [typeInput, setTypeInput] = useState(true);
  const [spiner, setSpiner] = useState(true);
  console.log(spiner);
  const { getPostLogin, getPostLoginAuthGoogle } = usePostAuth();
  if (token) {
    return <Navigate to="/dasboard" />;
  }

  const setDataGoogl = async (data) => {
    const { email, name, picture } = data;
    const dataGoogle = {
      email,
      name,
      picture,
    };

    const response = await getPostLoginAuthGoogle(dataGoogle);
    console.log(response);
    let getData = response.data;
    localStorage.setItem("secure_token", getData.token);
    localStorage.setItem("auth_cuenta", getData.auth);
    localStorage.setItem("response_auth", getData.message);
    localStorage.setItem("perfil_rol", getData.rol);
    setSpiner(!spiner);
    
    window.location.href = "/dasboard";
  };
  return (
    <>
      <ToastContainer />
    <Header />
      <div className="form_Login mt-36 mx-auto rounded-md border w-4/5 sm:3/4 animate__animated animate__fadeIn bg-white form md:w-[50rem]   my-9 drop-shadow-2xl ">
        <div className="login bg-white z-20 relative rounded-md ">
          <div className="flex item-center justify-center flex-col">
            <div className=" absolute p-2 left-0 text-3xl text-gray-600 ">
              <Link to="/">
                <FontAwesomeIcon icon={faAngleLeft} />
              </Link>
            </div>
            <div className="">
              <h1 className=" text-gray-600  block p-2  text-2xl text-center font-sans font-medium">
                Iniciar sesión
              </h1>
            </div>
          </div>

          <div className="descripcion">
            <p
              className="title text-gray-600 text-base font-sans
                        mt-6 mb-2
                        mx-3"
            >
              Ingrese sus datos para comenzar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("El email no es valido")
                    .required("El campo no puede estar vacio"),
                  password: Yup.string().required(
                    "El campo no puede estar vacio"
                  ),
                })}
                onSubmit={async (values) => {
                  let response = await getPostLogin(values);
                  if (response.status === 200) {
                    toast.success("Cargando...", {
                      position: toast.POSITION.TOP_RIGHT,
                      theme: "dark",
                    });
                    let getData = response.data;
                    localStorage.setItem("secure_token", getData.token);
                    localStorage.setItem("auth_cuenta", getData.auth);
                    localStorage.setItem("response_auth", getData.message);
                    localStorage.setItem("perfil_rol", getData.rol);
                    setSpiner(true);
                    window.location.href = "/dasboard";
                  }
                  if (response.response.status === 400) {
                    setSpiner(true)
                    toast.error("Este usuario no existe", {
                      position: toast.POSITION.TOP_RIGHT,
                      theme: "dark",
                    });
                     
                  } else if (response.response.status === 401) {
                    toast.warning("La contraseña es incorrecta", {
                      position: toast.POSITION.TOP_RIGHT,
                      theme: "dark",
                    });
                     setSpiner(true);
                  }
                }}
              >
                <Form>
                  <div
                    className="Fiel-email border bg-white flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded transition-200
                             "
                  >
                    <div className="icons   py-2 px-2 text-gray-400">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mx-1 text-xl"
                      />
                    </div>
                    <div className="email w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Correo electronico"
                        className="w-full block
                                         outline-none "
                      />
                    </div>
                  </div>
                  <div className="error">
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                      name="email"
                      // validate={validateEmail}
                    />
                  </div>

                  <div
                    className="Fiel-password border bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded"
                  >
                    <div className="icons    py-2 px-2 text-gray-400">
                      <FontAwesomeIcon icon={faKey} className="mx-1 text-xl" />
                    </div>

                    <div className=" w-full">
                      <Field
                        type={typeInput === true ? "password" : "text"}
                        name="password"
                        placeholder="Contraseña"
                        className="w-full block 
                                    outline-none bg-white"
                      />
                    </div>
                    <div
                      className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                      name="eye"
                      onClick={() => {
                        setTypeInput(!typeInput);
                      }}
                    >
                      {typeInput === true ? (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="animate__animated animate__fadeInRight"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="animate__animated animate__fadeInRight"
                        />
                      )}
                    </div>
                  </div>

                  <div className="error">
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                      name="password"
                    />
                  </div>

                  <div className="flex justify-between m-3">
                    <Link to="ayuda">
                      <p>
                        {" "}
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          className="text-[#074766] text-xl"
                        />{" "}
                        Ayuda
                      </p>
                    </Link>
                    <Link
                      to="/recovery+password/identify"
                      className="text-[#0099FF] hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <div className="button w-full relative">
                    <button
                      type="submit"
                      className="bg-[#0099FF] text-white rounded-full relative
                                p-1 py-1.5 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                h-9 flex justify-center"
                    >
                       {spiner === true ? (
                        <span onClick={() => setSpiner(!spiner)}>
                          Iniciar sesión
                        </span>
                      ) : (
                        <div className="centh">
                          <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )} 
                    </button>
                  </div>

                  <div className="permisos  mx-2 mt-2">
                    <Field type="checkbox" name="toggle" className="text-xl" />
                    <Link
                      to="/privacy"
                      className="mx-2  text-slate-900 hover:underline overflow-hidden
                                "
                    >
                      Acepto términos y condiciones
                    </Link>
                  </div>

                  <div
                    className="ajuste-cuenta   flex justify-start mt-4 mx-2 mb-2
                            "
                  >
                    <p>¿No tienes cuenta?</p>
                    <Link to="/signup">
                      <p className="text-[#0099FF] mb-3 ml-3">Crear cuenta</p>
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>

            <div className="entry mx-1 rounded-md hidden md:block">
              <video
                src="https://res.cloudinary.com/dkqp3wkbi/video/upload/v1670421680/animacion_media_fawwzt.mp4"
                autoPlay
                playinline
                loop
                muted
                preload="auto"
              ></video>
            </div>
          </div>
          <div className="op-goo flex flex-rows justify-center items-center ">
            <div className=" flex  justify-center items-center">
              <div
                className="authGoogle bg-gray-200 relative
                                p-1.5 m-2 flex items-center justify-center rounded-full"
              >
                <span className="mx-1 hidden md:block">puedes usar stored con otra cuenta</span>
                <span> </span>
              </div>
              <div className="countCuenda cursor-pointer">
                <div
                  className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded"
                >

                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      
                      let decode = jwt_decode(credentialResponse.credential);
                      setDataGoogl(decode);
                    }}
                    onError={() => {}}
                    useOneTap
                    locale
                    type="standard"
                    shape="pill"
                    theme="filled_black"
                    logo_alignment="left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
