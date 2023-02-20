import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Header } from "../components/Header";
import {
  faEnvelope,
  faLock,
  faCircleQuestion,
  faEye,
  faEyeSlash,faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import { usePostAuth } from "../hooks/context/UserContextData";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link,useNavigate} from "react-router-dom";

export const Signup = () => {
  const [typeInput, setTypeInput] = useState(true);
  const [spiner, setSpiner] = useState(true);
  const { getPostRegister } = usePostAuth();


  const Navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <Header />
    
      <div className="form-signup lg:mt-36  mx-auto rounded-md border animate__animated animate__fadeIn bg-white form md:w-[50rem] w-4/5 sm:3/4 my-9 drop-shadow-2xl">
      <div className="flex item-center justify-center">
            <div className=" absolute p-2 left-0 text-3xl text-gray-600 ">
              <Link to="/">
                <FontAwesomeIcon icon={faAngleLeft} />
              </Link>
            </div>
            <div className="">
              <h1 className=" text-gray-600 mb-6 block p-2  text-2xl text-center font-sans font-medium ">
                Crear Cuenta
              </h1>
            </div>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="entry mx-4 h-full rounded-md item-center hidden md:block ">
              <video
                src="https://res.cloudinary.com/dkqp3wkbi/video/upload/v1670421680/animacion_media_fawwzt.mp4"
                autoPlay
                playinline
                loop
                muted
                preload="auto"
              ></video>
            </div>
        <div className="container-signup   pb-1 rounded-lg ">   
          <div className="description">
            <p className="block  mx-5">
              Crea una cuenta para mejorar la experiencia y calidad de tu negocio{" "}
            </p>

          </div>
          <div className="countCuenda cursor-pointer">
            <div
              className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded"
            >
              <div className="p ml-1">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    let decode = jwt_decode(credentialResponse.credential);
                  }}
                  onError={() => {}}
                  useOneTap
                  locale
                  type="classic"
                  shape="pill"
                  theme="filled_black"
                  logo_alignment="left"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mx-5 my-5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 sm:mx-5">
            <p className="text-center mx-4 mb-0">O</p>
          </div>    
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("El email no es valido")
                .required("El campo no puede estar vacio"),
              password: Yup.string()
                .required("El campo no puede estar vacio")
                .min(6, "Debe tener mas de 6 caracteres"),
            })}
            onSubmit={async (values) => {
              let response = await getPostRegister(values);
              if (response.status === 200) {
               await toast.success("Usuario creado exitosamente!", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
               setTimeout(() => {
                Navigate("/login");
              }, 2000);
              }
              if (response.response.status === 400) {
                toast.warning("El correo ya existe!", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
              }

              if (response.response.status === 401) {
                toast.warning(
                  "Hubo un problema al registrar sus datos, intente nuevamente",
                  {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                  }
                );
              }
              if (response.response.status === 500) {
                toast.error("Ocurrio un error inesperado, intente nuevamente", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
              }
            }}
          >           
            <Form>
              <div
                className="Fiel-email border bg-white  flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded
                             "
              >
                <div className=" icons py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
                </div>
                <div className="email w-full ">
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
                />
              </div>
              <div
                className="Fiel-email border bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded"
              >
                <div className="icons    py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
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
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="bg-[#009AFA]  inline-block px-6 py-2.5 text-white  text-sm   shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-4/5 rounded-full mb-3"
                >
                  Crear cuenta
                </button>
              </div>
              <div className="permisos   mt-2 ml-3">
                <Field type="checkbox" name="toggle" className="text-xl" />
                <Link
                  to="/privacy"
                  className="mx-2  text-slate-900 hover:underline overflow-hidden
                                "
                >
                  Acepto términos y condiciones
                </Link>
              </div>
              <p className="text-sm font-semibold  ml-3 sm:ml-5  my-2">
                ¿Ya tienes una cuenta?
                <Link to="/login">
                  <span
                    href="#!"
                    className="text-[#2771E0] hover:text-blue-700 transition duration-200 ease-in-out  sm:ml-1"
                  >
                    Inicar Sesión
                  </span>
                </Link>
              </p>
              
            </Form>
          </Formik>        
            </div>
        </div>
      </div>
    </>
  );
};
