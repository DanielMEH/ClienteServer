import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import * as Yup from "yup";
import { faAngleLeft, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
function NewPassword() {
  const { newPasswordL } = usePostAuth();
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-gray-100 h-screen relative">
      <ToastContainer />
      <div className="flex  bg-white w-full border-b justify-between items-center">
        <div className="flex items-center  ">
        <Link
              to={"/verifyc+code/identify"}
              className="items-center flex bg-gray-200 m-1 rounded text-white py-2 px-3"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="text-2xl text-gray-700" />
              <span className="pl-2 text-gray-700">Volver</span>
            </Link>
          <span className="text-2xl text-[#0099FF] mx-2 font-bold">Stored</span>
        </div>
        <div className="flex items-center">
          <span className="mx-2 hidden sm:block">
            ¿Deseas crear una cuenta?{" "}
          </span>
          <div className="flex items-center  ">
            <Link
              to={"/signup"}
              className="items-center mr-2 flex bg-[#0099FF] m-1 rounded text-white py-2 px-3"
            >
              <FontAwesomeIcon icon={faUser} className="text-xl sm:text-2xl" />
              <span className="pl-2">Crear cuenta</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white w-4/5 sm:w-[30rem] rounded mt-9 mx-auto p-1  my-3">
        <div className="py-2 sm:text-xl font-semibold  px-3 border-b">
          Ingrese la nueva contraseña
        </div>
        <div className="text-gray-600 my-3 mx-2">
        Ya casi terminamos ingresa tu nueva contraseña para que puedas acceder a tu
          cuenta

        </div>
        <Formik
          initialValues={{
            password: "",
            password2: "",
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, "La contraseña debe tener mas de 6 digitos")
              .required("El campo no puede estar vacio"),
            password2: Yup.string()
              .min(6, "La contraseña debe tener mas de 6 digitos")
              .required("El campo no puede estar vacio")
              .oneOf(
                [Yup.ref("password"), null],
                "Las contraseñas no coinciden"
              ),
          })}
          onSubmit={async (values) => {
            
            let cod = localStorage.getItem("codigo");
            let email = localStorage.getItem("email");
            const response = await newPasswordL({
              codigo: parseInt(cod),
              correo: email,
              newPassword: values.password2,
            });           
            if (response.status === 204) {
              toast.success("Contraseña cambiada correctamente");
              localStorage.removeItem("codigo");
              localStorage.removeItem("email");
              setLoading(!loading);
              setTimeout(() => {
                window.location.href = "/login";
              }, 2000);
            } else {
              toast.error("Error al cambiar la contraseña");
              setLoading(!loading);
            }
          
          }}
        >
          <Form>
            <div
              className="Fiel-email bg-white flex items-center mx-2 my-1
                           border-solid border rounded transition-200
                             "
            >
              <div className="icons sm:py-4   py-2 px-2 text-gray-400">
                <FontAwesomeIcon icon={faKey} className="mx-1 text-xl" />
              </div>
              <div className="email w-full">
                <Field
                  type="password"
                  name="password"
                  placeholder="Ingrese la nueva contraseña"
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
                name="password"
              />
            </div>
            <div
              className="Fiel-email bg-white flex items-center mx-2 my-1
                           border-solid border rounded transition-200
                             "
            >
              <div className="icons sm:py-4   py-2 px-2 text-gray-400">
                <FontAwesomeIcon icon={faKey} className="mx-1 text-xl" />
              </div>
              <div className="email w-full">
                <Field
                  type="password"
                  name="password2"
                  placeholder="Confirmar contraseña"
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
                name="password2"
              />
            </div>
            <div className="relative">
              <div className={loading ? "loading" : "loadingblovk"}>
                <button
                  onClick={() => setLoading(!loading)}
                  type="submit"
                  className="bg-[#0099FF] text-white rounded-full relative
                                p-1 py-3 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                 flex justify-center cursor-pointer"
                >
                  Confirmar
                </button>
              </div>
              <div className={loading ? "loadingblovk" : "loading"}>
                <div
                  className="lds-ellipsis
                          bg-[#0099FF] text-white rounded-full relative
                                p-1 py-4 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                h-11 flex justify-center cursor-no-drop"
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="absolute w-full bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default NewPassword;
