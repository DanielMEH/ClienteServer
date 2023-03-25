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
import Header from "../components/Header";
import "../assets/css/fuente.css";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const HomePage=() =>{
  AOS.init({
    duration: 3000

  });
  document.body.style  ="overflow-x: hidden"
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
       >¡Los pequeños emprendedores y comerciantes merecen mucho más con invensys expade
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
      <img className="mt-10 w-full animate__animated animate__fadeIn" type="imagen"
       src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1679450558/kodiarLogo/Frame_1_4_nb71wp.png" alt="stored"/>
    </div>
    </div>
    <div class="elementor-background-overlay"></div>
    <div class="elementor-shape elementor-shape-bottom" data-negative="true">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">

	<path class="elementor-shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
</svg>		</div>
 <div className="seccion2"></div>
    </div>
    <div className="rounded flex flex-col md:flex-row items-center  justify-around lg:justify-between  max-w-6xl md:mx-auto my-14 ">
      <div className="circlepath hidden md:block" data-aos="fade-right">
      <div className="img-sec1">
      <FontAwesomeIcon icon={faBolt} className="text-[#fde047] absolute top-20
       lg:left[3rem]  xl:left[10rem]  m-1" />
        <img src={curba2} alt="" className="absolute bottom-[-16.9rem] left-[-6rem] w-36" />
      <img src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1676216582/kodiarLogo/mockuoFrame_hbrvph.png" 
      className="h-64 lg:h-96 rounded  p-10"
       type="imagen" title="Stored" alt="Stored" style={{marginBottom:'10rem'}}/>
      </div>
        <div className="circle1"data-aos="zoom-in-left"></div>
        <div className="circle2"data-aos="zoom-in-right"></div>
      </div>
      <div className="row hidden xl:block">
       <img src={rowFirst} alt="" className="w-[16rem] lg:w-[30rem] h-42"  />
      </div>
      <div className="w-[96%] mx:auto md:w-96 relative shadow-2xl bg-white rounded-md border p-10 "data-aos="fade-left">
        <div className="cir1 h-4 m-1 w-4 absolute bg-red-500 top-0 left-0 rounded-full"></div>
        <div className="cir2 h-4 m-1 w-4 absolute bg-[#fbbf24] top-0 left-6 rounded-full"></div>
        <div className="cir3 h-4 m-1 w-4 absolute bg-green-500 top-0 left-12 rounded-full"></div>
        <FontAwesomeIcon icon={faStar} className="text-[#fde047] absolute top-0 right-0 m-1"/>
        <span className="text-md lg:text-xl   text-slate-700 fade-right">
      Invensys es una aplicación de administración para el
       inventario de los productos de tu negocio, en la cual podras
        llevar un control permanente de todos ellos, necesidades de 
        abastecimiento, reporte de vencimientos, rotación de productos y
         podras utilizarla para el manejo administrativo y financiero de tu negocio.

        </span>
        
      </div>
    </div>
      <div className="text-center fuente-t1  ">
<span className="text-2xl md:text-6xl h-36">
Que esperas de nuestra plataforma?
</span>
      </div>
    <div className="relative">
    <div className="grid grid-cols-1 md:mx-auto  sm:grid-cols-2 grid-flow-dense
      max-w-7xl mx-5 md:lg-auto
      md:grid-cols-3  gap-5">
      <section className="bg-white w-full  flex flex-col items-center  md:mx-0 rounded shadow-2xl cursor-pointer p-1 "data-aos="fade-right">
        <div className="relative ">
          <div className="">
            <img className=" w-56 md:w-full" src={imagen4} alt="stored" />
          </div>
        </div>
        <div className="    ">
          <p className="text-gray-800 rounde-sm  mx-3 text-center text-xl border-t border-t-slate-200">
            Llevaras un registro de tus productos de entrada y salidas,
           mediante reportes que estaran pendiente de tu inventario. </p>
        </div>
      </section>
      <section className="bg-white w-full  flex flex-col items-center  md:mx-0  rounded shadow-2xl cursor-pointer p-1" data-aos="fade-up">
        <div className="relative ">
          <div className=" ">
            <img className="w-56 md:w-full" src={imagen5} alt=""/>
          </div>
        </div>
        <div className="container paragraph  ">
          <p className="text-gray-800 rounde-sm  mx-3 text-center text-xl border-t border-t-slate-200">
            Tu información esta segura, nos importa de que tus datos no se pierdan y no hallan fallos
             al momento de utilizar nuesto servicio.</p>
        </div>
      </section>
      <section className="bg-white w-full flex flex-col items-center  md:mx-0  rounded shadow-2xl cursor-pointer p-1 "data-aos="fade-left">
        <div className="relative ">
          <div className=" ">
            <img className="w-56 md:w-full" src={imagen6} alt=""/>
          </div>
        </div>
        <div className="container paragraph  ">
          <p className="text-gray-800   mx-3 text-center text-xl border-t border-t-slate-200">
            Podras crear usuarios que ayude llevar un 
          mejor control de  tu inventario, a travez de roles que faciliten el manejo de tu negocio. </p>
        </div>
      </section>
    </div>
    </div>
    <div className="text-center fuente-t1 ">
      <span className="
      text-2xl md:text-6xl h-36">
Impulsamos en la inovacion

      </span>
      </div>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around bgr">
      <div className=" flex flex-col lg:flex-row justify-center relative  ">
        <div className="h-3/5 hidden lg:block relative w-1 lg:ml-16 lg:mt-4  colorbgline">
        </div>
          <img src={curba3} alt="" className="absolute hidden lg:block top-0 left-20" />
          <FontAwesomeIcon icon={faWandMagicSparkles} data-aos="zoom-in" className="
          absolute top-[-4px] shadow-lg hidden lg:block
           shadow-[#fde047] text-[#facc15] left-14"/>
        <article className="md:w-[30rem] lg:mt-20 "data-aos="flip-left">
        <p className="">
          <span className="text-[#3376F9] font2 t ">
            <div className="span">
              Invensys un servicio de alta calidad.
            </div>
          <span className="font3s"> 
          <div className="text-md">
          Nuestra plataforma impulsa la innovación con herramientas que
             aumentan la seguridad de tu negocio
          </div>
          </span>
         </span>
        </p>
        <div className="scalewrap"></div>
        <p className="text-center md:text-end max-w-sm lg:ml-8 text-xl text-gray-700 "> Aumento del 100%
          en la productividad de tu trabajo
          después de 1 año</p>
        </article>
      </div>
      
      <div className=" lg:mr-10 my-10 flex lg:self-end bg-slik ">
        <img src={imagen7} alt="" className="w-full"data-aos="fade-left"
    />
      </div> 
    </div>
    <div className="text-center fuente-t1 ">
      <span className="text-2xl md:text-6xl ">

    Comodo para que cualquier persona pueda utilizarlo sin dificultad
      </span>
      </div>
 {/* ? section cards  */}
      <div className="block md:hidden">
        <h2 className="text-center text-2xl">Información sobre <span className="text-[#3498db]">Invensys</span> </h2>
        <div className="cards">
          <section className="bg-white mt-2 w-[90%] mx-auto rounded-lg p-2 ">

            <h2 className="text-xl font-bold">Manejo de tu inventario mas facil y comodo</h2>
            <p>
              Con invensys podra llevar un control permanente de todos los productos,
              necesidades de abastecimiento, reporte de vencimientos y rotaciond e sus productos. 
            </p>

          </section>
          <section className="bg-white mb-4 mt-2 w-[90%] mx-auto rounded-lg p-2 ">

<h2 className="text-xl font-bold">Estadisticas y informes de tu negocio</h2>
<p>
Representación de graficas, ayudando un mejor analisis de tu negocio para que puedas
 mejorar y que tu negocio cresca más
</p>

</section>
        </div>
      </div>
    <div className="max-w-7xl mx-auto justify-center">
      
      <div className="flex flex-col w-60 md:w-full  mx-auto sm:flex-row justify-center">
        <div className="  sm:min-w-60 mx-2">
          <Link to={"/login"}  className="
           md:px-4 py-4 flex items-center text-sm md:text-xl justify-between rounded-xl  text-white
            bg-black duration-200 w-full  mb-2 md:mb-12  truncate
             transition  ease-in-out drop-shadow-md shadow-xl hover:shadow-gray-500/50">
              <span className="mt-1 ml-1">Crear una cuenta en stored</span>
              <FontAwesomeIcon className="my-1 mx-2 text-xl" icon={faChevronRight} /> </Link>
        </div>
        <div className="sm:min-w-60">
          <Link to={"/signup"}  className=" px-4 py-3.5 flex items-center rounded-xl 
             w-full truncate text-sm md:text-xl justify-between
            text-black hover:bg-transparent  border-2 shadow-lg hover:shadow-gray-500/50 
             border-black mb-1 md:mb-12
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


