import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import x from "../assets/icons/x.svg";
import { ToastContainer, toast } from "react-toastify";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/styleSlider.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";

export const UploadExcel = ({ estado = false }) => {
  const { postUploadcsvUsuario } = useGetUsers();
  const [csv, setCsv] = useState([]);
  const navigate = useNavigate();

  const [estados, setEstado] = useState(false);
  const [spiner, setSpiner] = useState(false);

  const handleShow = () => {
    setEstado(false);
    console.log(estado);
  };

  useEffect(() => {
    if (estado) {
      setEstado(true);
    } else {
      setEstado(false);
    }
  }, [estado]);

  useEffect(() => {
    const fileUpload = document.getElementById("file");
    const progress = document.getElementById("progress");
    const load_bar = document.querySelector(".load-bar");
    const count = document.getElementById("count");
    fileUpload.addEventListener("change", (e) => {
      load_bar.style.backgroundColor = "#eee";

      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("progress", (e) => {
        progress.style.width =
          Number.parseInt((e.loaded * 100) / e.total) + "%";
        count.innerHTML = Number.parseInt((e.loaded * 100) / e.total) + "%";
        count.style.transition = "all 0.5s ease";
        count.style.transform = "translateX(-50%)";
        count.style.color = "#fff";
      });

      fileReader.addEventListener("load", () => {
        progress.style.width = "100%";
      });
    });
  });

  return (
    <div
      className={
        estados
          ? "  h-full absolute z-30 w-4/5"
          : "hidden"
      }
    >
      <ToastContainer />

      <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 relative ">
        <div className="container-signup  border shadow-2xl pb-1 rounded-lg bg-white ">
          <button
            className="bg-[#fe5f57] rounded-full absolute right-1 top-1"
            onClick={handleShow}
          >
            <img src={x} alt="" />
          </button>
          <h2 className="text-xl font-semibold mt-2 mb-5 pt-5 text-center  ">
            Subir archivo csv
          </h2>

          <Formik
            initialValues={{ modulo: "", estado: "" }}
            onSubmit={async (values) => {
              console.log(values);
              let archivousuariocsv = csv;
              let formDataCsv = {
                modulo: values.modulo,
                estado: values.estado,
              };
              let response = await postUploadcsvUsuario(
                formDataCsv,
                archivousuariocsv
              );

              if (response.status === 201) {
                await toast.success("se subio la lista de usuarios con exito", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                await setSpiner(false);
                setEstado(false);
                setTimeout(() => {
                  window.location.reload();
                  navigate("/usuarios");
                }, 2000);
                
              } else {
                await toast.error("Debes de elegir un archivo valido", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                await setSpiner(false);
                window.location.reload();
              }
            }}
          >
            <Form>
              <div
                className="Fiel-email relative bg-white h-10  flex items-center mx-2 my-1
                           border-solid border-2 cursor-pointer border-[#1876F2] bg-transparent  rounded
                             "
              >
                <div className="upload-static flex justify-center items-center absolute w-full h-full  top-0 bg-[#0770a533] ">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1876F2"
                        d="M11 20H6.5q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55V20Z"
                      />
                    </svg>
                  </div>
                  <div className="subir text-gray-800 mx-1">
                    Subir lista de usuarios
                  </div>
                </div>

                <div className="email w-full h-full cursor-pointer absolute  ">
                  <Field
                    type="file"
                    name="email"
                    placeholder="Correo electronico"
                    className="w-full block opacity-0 h-full
                                       outline-none cursor-pointer "
                    id="file"
                    onChange={(e) => {
                      setCsv(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="load-bar">
                <span id="progress" className="progress">
                  <div className="count ">
                    <span className="mx-[10.5rem] text-white" id="count"></span>
                  </div>
                </span>
              </div>

              <div className="list_options flex justify-between  items-center">
                <section>
                  <label
                    htmlFor="modulo"
                    className="block mb-2 text-sm font-medium text-gray-900 mx-2 py-1"
                  >
                    Seleccionar modulo
                  </label>
                  <Field
                    as="select"
                    name="modulo"
                    className="w-4/5 mx-2  rounded cursor-pointer  py-2 outline-none border border-[#1876F2] "
                  >
                    <option value="usuario">usuario</option>
                    <option value="inventario">inventario</option>
                  </Field>
                </section>
                <section>
                  <label
                    htmlFor="estado"
                    className="block mb-2 text-sm font-medium text-gray-900 mx-2 py-1 items-center
                "
                  >
                    Estado
                  </label>
                  <Field
                    as="select"
                    name="estado"
                    className="w-4/5 mx-2  rounded cursor-pointer outline-none py-2 border border-[#05bdc4]"
                  >
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

              <div
                className="bg-[#009AFA]  overflow-hidden relative justify-center text-center mx-auto flex w-3/5 px-6 py-5 text-white  text-sm  rounded-full shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
              >
                <div className={spiner ? "lds-ring" : "hidden"}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <button
                  onClick={() => setSpiner(true)}
                  type="submit"
                  className=" bg-[#009AFA] w-full z-10 absolute h-full top-0"
                >
                  Subir
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UploadExcel;
