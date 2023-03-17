import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faCircleQuestion,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import x from "../assets/icons/x.svg"
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link,useNavigate } from "react-router-dom";
import "../assets/css/styleSlider.css"

export const  RegisterCategorys = ({estado=false }) => {
  
  const navigate = useNavigate(); 
  const [typeInput, setTypeInput] = useState(true);
  const [estados, setEstado] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const { UserRegister } = useGetUsers();
  const handleShow = () => {
    setEstado(false) 
    console.log(estado);
  }
  
 useEffect(() => {
  if(estado){
    setEstado(true)
  }
  else{
    setEstado(false)
  }
 },[estado])
 

  
  return (
    <div className={
      estados ? "  h-full absolute z-30 w-4/5" : "hidden" 
    }>
      <ToastContainer />
      
      <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 relative ">
        <div className="container-signup  border shadow-2xl pb-1 rounded-lg bg-white ">
      <button className="bg-[#fe5f57] rounded-full absolute right-1 top-1"
      onClick={(handleShow)}><img src={x} alt="" /></button>
          <h2 className="text-xl font-semibold mt-2 mb-5 pt-5 text-center  ">
            Crear categoria
          </h2>
        
          <Formik

            initialValues={{name_category:"",description:""}}
            validationSchema={Yup.object({
              
                name_category: Yup.string()
                .required("El campo no puede estar vacio"),
              description: Yup.string()
                .required("El campo no puede estar vacio")
                .min(6, "Debe tener mas de 6 caracteres"),
            })}
            onSubmit={async (values) => {
               
              let response = await UserRegister(values);
                if (response.status === 201) {
                 await toast.success("Usuario creado con exito", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                 await setSpiner(false)
                 setEstado(false)
                 setTimeout(() => {
                  navigate("/usuarios")
                 },2000)
                
                 
                }else{
                 await toast.warning("!Ups! Hubo un error inesperado o el correo ya existe", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                 await setSpiner(false)
                 
                }

            }
        }
          >
            <Form>
              <div
                className="Fiel-email bg-white  flex items-center mx-2 my-1
                           border-solid border-2 border-[#1876F2]  rounded
                             "
              >
                <div className=" icons py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
                </div>
                <div className="email w-full ">
                  <Field
                    type="text"
                    name="name_category"
                    placeholder="Nombre de la categoria"
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
                  name="name_category"
                />
              </div>

              <div
                className="Fiel-email bg-white flex items-center mx-2 mt-6
                           border-solid border-2 border-[#1876F2] rounded"
              >
                <div className="icons    py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
                </div>

                <div className=" w-full">
                  <Field
                    type={"text"}
                    name="description"
                    placeholder="Descripción"
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
                 
                </div>
              </div>

              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                  name="description"
                />
              </div>
<div className="list_options flex justify-between  items-center">

             <section>
             <label
                htmlFor="estado"
                className="block mb-2 text-sm font-medium text-gray-900 mx-2 py-1 items-center
                "
              >
                Estado
              </label>
              <Field as="select" name="estado" className="w-full mx-2  rounded cursor-pointer outline-none py-2 border border-[#05bdc4]">  
              <option value="Inactivo">Inactivo</option>
             <option value="Activo">Activo</option>
           
             
           </Field>
             </section>

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
              

              <div className="bg-[#009AFA]  overflow-hidden relative justify-center text-center mx-auto flex w-3/5 px-6 py-5 text-white  text-sm  rounded-full shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3">
             
             <div className={spiner ?"lds-ring":"hidden"}><div></div><div></div><div></div><div></div></div>
             
                <button onClick={()=>setSpiner(true)}
                  type="submit"
                  className=" bg-[#009AFA] w-full z-10 absolute h-full top-0"
                >
                  Crear categoria
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};


