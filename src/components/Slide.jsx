import React,{useState} from 'react'
import pasion from "../assets/img/pasion.jpg"
import ezfuerzo from "../assets/img/ezfuerzo.jpg"
import crecimiento from "../assets/img/crecimiento.jpg"
import creatividad from "../assets/img/creatividad.jpg" 
import inivacion from "../assets/img/inovacion.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
import 'animate.css';
export const Slide = () => {
    const imagenesGalery = [ pasion,ezfuerzo,crecimiento,creatividad,inivacion]
    const [imagenActaul, setImagenActual] = useState(0)
    const cantidad = imagenesGalery?.length
    if(!Array.isArray(imagenesGalery) || cantidad === 0)
    return;
    const nextImagen = ()=>{
        setImagenActual(imagenActaul === cantidad - 1 ? 0 : imagenActaul + 1)

    }
    const prevImagen = ()=>{
        setImagenActual(imagenActaul === 0 ? cantidad - 1 : imagenActaul - 1)
    }
    
  return (
    <div className='flex relative  justify-center  items-center h-96 max-w-7xl mx-auto mt-36'>
        
        <button className=' text-gray-800 rounded-full px-5 py-3   bg-gray-200 inline-block'
        onClick={prevImagen}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {imagenesGalery.map((imagen, index) => {
            return (
                <div className=''>{imagenActaul === index &&(
                    <img key={index} src={imagen} alt="imagen" className='
                    animate__animated animate__fadeIn w-[40rem] rounded-md
                    cursor-pointer' />
                    

                )}
            </div>
            );
        })}
                <button className='text-gray-800 rounded-full px-5 py-3   bg-gray-200 inline-block'
                onClick={nextImagen}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
                <div className="div hidden">
                    {imagenActaul===0  ? <p className="text-2xl font-bold text-cyan-900  animate__animated animate__fadeInUp
                    absolute left-[30rem] w-80 bottom-10 tansp text-center">
                        Con nuestra pasion y voluntad te brindamos el mejor servicio</p> : null}
                    {imagenActaul===1  ? <p className="text-2xl font-bold text-cyan-900 animate__animated animate__fadeInUp
                    absolute left-[30rem] w-80 bottom-10 tansp text-center">
                        Con nuestro esfuerzo seguiremos aplicando funcionalidades y mas herramientas 
                        que te ayuden en tu trabajo diario</p> : null}
                    {imagenActaul===2  ? <p className="text-2xl font-bold text-cyan-900 animate__animated animate__fadeInUp
                    absolute left-[30rem] w-80 bottom-10 tansp text-center">
                        con nuestro crecimiento seguiremos aportando mejoras a stored</p> : null}
                    {imagenActaul===3  ? <p className="text-2xl font-bold text-cyan-900 animate__animated animate__fadeInUp
                    absolute left-[30rem] w-80 bottom-10 tansp text-center">
                        Nos importa tú, te brindamos un diseño amigable para que sea comodo al navegar</p> : null}
                    {imagenActaul===4  ? <p className="text-2xl font-bold text-cyan-900 animate__animated animate__fadeInUp
                    absolute left-[30rem] w-80 bottom-10 tansp text-center">
                        Trabajaremos para tener nuevas inovaciones y seguir creciento.</p> : null}
                </div>

    </div>
  )
}
