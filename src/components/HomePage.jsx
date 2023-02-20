import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,faStar,faBolt,faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "../components/Slide";
import AOS from "aos"
import 'aos/dist/aos.css';
import 'animate.css';
import rowFirst from "../assets/img/curba1.png";
import curba2 from "../assets/img/curba2.png";
import curba3 from "../assets/img/curba3.png";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.png"
import Header from "./Header";
import "../assets/css/fuente.css";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const HomePage=() =>{
  AOS.init({
    duration: 3000

  });
  return (
    <>
    <div className="">
    <Header/>
    <div className=" colorcamb ">
    <div className="content-home">
    <div className=" w-full  text-xl md:w-4/5  md:pl-10">
      <h2 className="h5-mktg w-full text-5xl">¡Comienza a crear tu propio
       invetario para llevar un mejor
       manejo de tu negocio...!</h2>
       <p
       className="text-slate-400 m-2 md:m-0 m md:text-start md:py-2 md:text-2xl text-center"
       >¡Los pequeños emprendedores y comerciantes merecen mucho más con stored expade
        tu negocio! 100% gratuito</p>
        <p className="h-2 mx-4 md:m-0 bg-emerald-400 rounded-full animate__animated animate__bounceInLeft"></p>
      <Link to={"/login"} className="
        bg-white py-3 inline-block 
       mt-12 mb-36 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y ">Comienza ya </Link>
      <Link to={"/"} className="
        bg-white ml-4 py-3 inline-block
       my-5 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y ">Explorar más </Link>
    </div>
    <div className="w-full">
      <img className="mt-10 w-full animate__animated animate__fadeIn" type="imagen" src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1676209109/kodiarLogo/mockuoWelcome_jxi87i.png" alt="stored"/>
    </div>
    </div>
    <div class="elementor-background-overlay"></div>
    <div class="elementor-shape elementor-shape-bottom" data-negative="true">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">

	<path class="elementor-shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
</svg>		</div>
 <div className="seccion2"></div>
    </div>
    <div className="rounded flex items-center justify-between  max-w-7xl mx-auto my-14 ">
      <div className="circlepath" data-aos="fade-right">
      <div className="img-sec1">
      <FontAwesomeIcon icon={faBolt} className="text-[#fde047] absolute top-20 left[10rem] m-1" />
        <img src={curba2} alt="" className="absolute bottom-[-16.9rem] left-[-6rem] w-36" />
      <img src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1676216582/kodiarLogo/mockuoFrame_hbrvph.png" className="h-96 rounded  p-10" type="imagen" title="Stored" alt="Stored" />
      </div>
        <div className="circle1"data-aos="zoom-in-left"></div>
        <div className="circle2"data-aos="zoom-in-right"></div>
      </div>
      <div className="row">
       <img src={rowFirst} alt="" className="w-[30rem] h-42"  />
      </div>
      <div className="w-96 relative shadow-2xl rounded-md border p-10 "data-aos="fade-left">
        <div className="cir1 h-4 m-1 w-4 absolute bg-red-500 top-0 left-0 rounded-full"></div>
        <div className="cir2 h-4 m-1 w-4 absolute bg-[#fbbf24] top-0 left-6 rounded-full"></div>
        <div className="cir3 h-4 m-1 w-4 absolute bg-green-500 top-0 left-12 rounded-full"></div>
        <FontAwesomeIcon icon={faStar} className="text-[#fde047] absolute top-0 right-0 m-1"/>
        <span className="text-xl   text-slate-700 fade-right">
      Stored es una aplicación de administración para el inventario de los productos de tu negocio, en la cual podras llevar un control permanente de todos ellos, necesidades de abastecimiento, reporte de vencimientos, rotación de productos y podras utilizarla para el manejo administrativo y financiero de tu negocio.

        </span>
        
      </div>
    </div>
      <div className="text-center fuente-t1 ">
Que esperas de nuestra plataforma?
      </div>
    <div className="grid max-w-7xl mx-auto relative grid-cols-3  gap-5">
      <div className="line1 absolute  bg-emerald-400 shol left-[-30rem] w-1 ml-96 h-[50rem] "data-aos="fade-up"></div>
      <section className="   rounded shadow-2xl  "data-aos="fade-right">
        <div className="relative ">
          <div className="">
            <img className=" w-full" src={imagen4} alt="stored"/>
          </div>
        </div>
        <div className="    ">
          <p className="text-gray-800   mx-3 text-center text-xl border-t border-t-slate-200">Llevaras un registro de tus productos de entrada y salidas
           mediante reportes que estaran pendiente de tu inventario </p>
        </div>
      </section>
      <section className="   rounded shadow-2xl " data-aos="fade-up">
        <div className="relative ">
          <div className=" ">
            <img className="w-full" src={imagen5} alt=""/>
          </div>
        </div>
        <div className="container paragraph  ">
          <p className="text-gray-800   mx-3 text-center text-xl border-t border-t-slate-200">Tu información esta segura, nos importa de que tus datos no se pierdan y no hallan fallos al momento de utilizar nuesto servicio</p>
        </div>
      </section>
      <section className="  rounded shadow-2xl  "data-aos="fade-left">
        <div className="relative ">
          <div className=" ">
            <img className="w-full" src={imagen6} alt=""/>
          </div>
        </div>
        <div className="container paragraph  ">
          <p className="text-gray-800   mx-3 text-center text-xl border-t border-t-slate-200">Podras crear usuarios que ayude llevar un 
          mejor control de  tu inventario a travez de roles que faciliten el manejo de tu negocio </p>
        </div>
      </section>
    </div>
    <div className="text-center fuente-t1 ">
Impulsamos en la inovacion
      </div>
    <div className="flex justify-between bgr">
      <div className=" flex relative ">
        <div className="h-3/5 relative w-1 ml-16 mt-4 mr-5 colorbgline">
        </div>
          <img src={curba3} alt="" className="absolute top-0 left-20" />
          <FontAwesomeIcon icon={faWandMagicSparkles} data-aos="zoom-in" className="absolute top-[-4px] shadow-lg shadow-[#fde047] text-[#facc15] left-14"/>
        <article className="w-[30rem] mt-20 "data-aos="flip-left">
        <p className="">
          <span className="text-[#3376F9] font2 ">Stored un servicio de alta calidad.
          <span className="font3s"> Nuestra plataforma impulsa la innovación con herramientas que
             aumentan la seguridad de tu negocio</span>
         </span>
        </p>
        <div className="scalewrap"></div>
        <p className="max-w-sm ml-8 text-xl text-gray-700 "> Aumento del 100%
          en la productividad de tu trabajo
          después de 1 año</p>
        </article>
      </div>
      
      <div className=" mr-10 my-10 flex self-end bg-slik ">
        <img src={imagen7} alt="" className="w-full"data-aos="fade-left"
    />
      </div> 
    </div>
    <div className="text-center fuente-t1 ">
    Comodo para que cualquier persona pueda utilizarlo sin dificultad
      </div>
    <div className="max-w-7xl mx-auto">
      
      <div className=" flex justify-center">
        <div className="mr-2">
          <Link to={"/login"}  className="
           px-4 py-4 flex items-center text-xl rounded-xl  text-white
            bg-black duration-200    mb-12
             transition  ease-in-out drop-shadow-md shadow-xl hover:shadow-gray-500/50">
              <span className="mt-1">Crear una cuenta en stored</span>
              <FontAwesomeIcon className="my-1 mx-2" icon={faChevronRight} /> </Link>
        </div>
        <div>
          <Link to={"/signup"}  className=" px-4 py-3.5 flex items-center rounded-xl 
            text-lg 
            text-black hover:bg-transparent  border-2 shadow-lg hover:shadow-gray-500/50 
             border-black mb-12
             transition duration-150 ease-in-out drop-shadow-md  ">
              <span className="mt-1 font-bold">Iniciar sesión en stored</span>
              <FontAwesomeIcon className="my-1 mx-2 text-xl" icon={faChevronRight} /> </Link>
        </div>
      </div>
    </div>
   <Slide/>
    <Footer/> 
    </div>
    </>
  )
}


