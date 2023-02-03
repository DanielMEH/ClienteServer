import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import * as Yup from "yup";
import { faAngleLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
function CodePassword() {
   const { verifyCodeUser } = usePostAuth();
   const [loading, setLoading] = useState(false);

  let getEmal = localStorage.getItem("email");

  function handleVerifyCode() {
    const inputs = document.querySelectorAll(".formClick > *[class]");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.keyCode === 8) {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
          event.preventDefault();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode >= 48 && event.keyCode <= 57) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
          if (event.keyCode >= 4 && event.keyCode <= 91) {
          }
        }
      });
    }
  }
  const handleForm = async(e) => {

    e.preventDefault();
    const code1 = e.target.code1.value;
    const code2 = e.target.code2.value;
    const code3 = e.target.code3.value;
    const code4 = e.target.code4.value;
    const code5 = e.target.code5.value;
    const code6 = e.target.code6.value;
    if (code1 === "" || code2 === "" || code3 === "" || code4 === "" || code5 === "" || code6 === "") {
     return toast.error("Por favor ingrese todos los campos");
      
    }else{
      let arrayCode = [parseInt(code1), parseInt(code2), parseInt(code3), parseInt(code4), parseInt(code5), parseInt(code6)];
      let codigo = arrayCode.join("");
      let email = localStorage.getItem("email");
      let data ={
        codigo,
        email
      }
      const response = await verifyCodeUser(data);
      if(response.status === 200){
        return (
          localStorage.setItem("codigo", parseInt(codigo) ),
          toast.success("Verificación exitosa",
          {
            autoClose: 3000,
          }

          ),
          setTimeout(() => {
            window.location.href = "/newPassword+auth=true";

          },3000)
          ) 
      }
      if(response.response.status === 400){
        return toast.error("El código ingresado es incorrecto");
      }
    }
    
  }
useEffect(() => {
  handleVerifyCode();
}, [])
  return (
    <div>
      <div className="bg-gray-100 h-screen relative">
        <ToastContainer />
        <div className="flex  bg-white w-full border-b justify-between items-center">
          <div className="flex items-center  ">
            <Link
              to={"/recovery+password/identify"}
              className="items-center flex bg-gray-200 m-1 rounded text-white py-2 px-3"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="text-2xl text-gray-700" />
              <span className="pl-2 text-gray-700">Volver</span>
            </Link>
            <span className="text-2xl text-[#0099FF] mx-2 font-bold">
              Stored
            </span>
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
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-xl sm:text-2xl"
                />
                <span className="pl-2">Crear cuenta</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white w-full sm:w-[30rem] rounded mt-9 mx-auto p-1  my-3">
          <div className="py-2 sm:text-xl font-semibold  px-3 border-b">
            Verificaión requerida
          </div>
          <div className="text-gray-600 my-3 mx-2">
            Hemos enviado un código de verificación a{" "}
            <strong>{getEmal}, </strong>
            para continuar deberas completar este campo.
          </div>
          <form action="flex justify-center" onSubmit={handleForm}>
            <div className="formClick flex justify-center">
              <input
                type="text"
                className="input_code
              border sm:p-3 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code1"
              />
              <input
                type="text"
                className="input_code
              border sm:p-3 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code2"
              />
              <input
                type="text"
                className="input_code
              border sm:p-3 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code3"
              />
              <input
                type="text"
                className="input_code
              border sm:p-3 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code4"
              />
              <input
                type="text"
                className="input_code
              border sm:p-3 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code5"
              />
              <input
                type="text"
                className="input_code
              border sm:p-3 py-2 m-1 rounded-md text-center focus:border-blue outline-none
              focus:border-[#0099FF] focus:shadow  focus:shadow-cyan-600  "
                maxLength={"1"}
                size="1"
                name="code6"
              />
            </div>
            <div className="btn">
              <button
                type="submit"
                className="bg-[#0099FF]
              text-white inline-block text-center w-full py-2 mb-2 mt-2 rounded-full"
              >
                verificar código
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CodePassword;
