import React from 'react'
import "../assets/css/somos.css"
import Header from '../components/Header'
export const Somos = () => {
  return (
    <>
    <Header/>
     <main class="content-k max-w-7xl flex  mx-4 my-12 md:mx-auto ">

<div class="contten-1 mk-kodiar">
 <div class="title">
     <h1 class="my-4 text-xl font-bold">¿Quienes Somos?</h1>
    </div>
     
    <div class="description">
    <article class="my-6">
     <p class="p">Stored, creada en 2022, es una aplicación dedicada a la prestacion de servicios de Admistración, soportada con infraestructura tecnica y tecnologica, capaz de brindar a nuestros usuarios calidad en la prestación de sus servicios.</p>
     <p class="p">A través de la prestación de nuestros servicios de Administración hemos logrado intoducir a las tiendas de la ciudad de Armenia a tener un manejo permanente de su inventario cuidadosamente para satisfacer las necesidades y expectativas de todos los miembros de esta comunidad, logrando asi consolidar y posicionar este servicio.</p>
    </article>
    </div>
 
    <div class="mision">
     <div class="title-3">
         <h2 class="my-4 text-xl font-bold">
             Nuestra Misión
             </h2>
        </div>
        <article>
         <p class="my-6">
             Crear un producto de software que responda, evolucione y potencie el negocio de nuestros clientes y sus oportunidades en el mercado, siempre basados en nuestros valores empresariales.Fortalecer la Industria del Software creando empleo y mejorando las capacidades de otras industrias.
         </p>
        </article>
    </div>
 
    <div class="vision">
     <h2 class="my-4 text-xl font-bold">Nuestra Visión</h2>
     
     <p>
         Identificarnos como uno de los mejores proyectos de Software Nacional con la confianza de las empresas con mayor crecimiento en rentas en las principales ciudades de Colombia.
     </p>
    </div>
 
     <div class="valores">
         <h2 class="my-4 text-xl font-bold">Nuestros Valores</h2>
         
         <p class="p">
         El compromiso, la ética y el profesionalismo en todas nuestras acciones.
         </p>
 
             
         <p class="p">
         El equipo Stored es liderado por un grupo de  5 desarrolladores expertos en la creación de código limpio y eficiente capaces de realizar Pruebas y despliegue de programas y sistemas, que hacen que la existencia de Stored sea posible.
         </p>
     </div>
 </div>
 <div class="conten-2 flex justify-center items-center">
  <img src="https://raw.githubusercontent.com/klayngo/backendKodiar/master/public/image/contactanos.jpg" alt="Kodiar" title="Kodiar"/>
 </div>    
    </main>
    
    </>
  )
}
