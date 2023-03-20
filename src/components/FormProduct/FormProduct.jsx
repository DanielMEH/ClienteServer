import React,{useEffect, useState} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DatePicker } from 'antd';
import { ToastContainer, toast } from "react-toastify";

import moment from 'moment-with-locales-es6';
import {useContextCategory} from "../../hooks/context/ContextCategory"
import {useContextProduct} from "../../hooks/context/ContextProduxt"
const { RangePicker } = DatePicker;
export const FormProduct = () => {

    const {postProducts} = useContextProduct()
    const {dataGategorias,
        getDataCategorias} = useContextCategory()
       

    useEffect(() => {
        getDataCategorias()
    }, [])

    
    const [category, setCategoria] = useState([]);
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [fecha , setFecha] = useState([]);
    const [loading, setLoading] = useState(true);
      const disabledDate = (current) => {
        moment.locale('es');
       return current && current < moment().endOf('day')

      };
      const onChange = (value, dateString) => {

          setFecha(dateString)
      }
    
     
     const locales ={
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week'],
            
          },
     }
  return (
    <>
     <ToastContainer />
    <div className={
        active2 ? "hidden" : "block"
    }>
    <div className="Formulario fixed bg-white rounded-lg inset-0 drop-shadow-2xl w-6/12 m-auto  h-fit z-50">
    <div className="sec1 w-full p-2 flex justify-between">
        <div className="title">
            <span className='text-xl my-4 block'>Crea productos para expandir tu negocio</span>
            <p className='text-red-500 text-sm'>Todos los campos son requeridos</p>
        </div>

        <div className="x cursor-pointer"
        onClick={() => setActive2(!active2)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>
        </div>
    </div>
        <div className="formulario">
            <Formik
                initialValues={{    
                    name: "",
                    iva: "",
                    description: "",
                    priceBuy: "",
                    price:"",
                    
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Obligatorio"),
                    iva: Yup.string()
                        
                        .required("Obligatorio"),
                    description: Yup.string()
                        
                        .required("Obligatorio"),
                    priceBuy: Yup.string()
                        
                        .required("Obligatorio"),
                    price: Yup.string()
                        
                        .required("Obligatorio"),
                    
                })}
                onSubmit={async (values) =>{
                    setLoading(false)
                    const data = {
                        name: values.name,
                        iva: parseInt(values.iva),
                        description: values.description,
                        priceBuy: values.priceBuy,
                        price: values.price,
                        category: category[0] ,
                        fechaInicio: fecha[0],
                        fechaFin: fecha[1]
                    }
                    
                    if(category.length === 0){
                        setLoading(true)
                      return  await toast.warning("Selecione una categoria", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                    }
                    else if(fecha.length === 0){
                        setLoading(true)
                      return  await toast.warning("selecione una fecha", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                          
                    
                    }else{
                        const response = await postProducts(data)
                        
                        if(response.status === 200){
                            setLoading(true)
                            return await toast.success("Producto creado", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                        }

                    }
                    
                    
                }}
               
               >
                <Form className='grid grid-cols-2 gap-3 mx-4'>

                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="name " className='mx-2 text-sm'>Nombre</label>
                        <div className="input flex items-center">
                            <div className="icon1"
                            
                            >
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/></svg>
                            </div>
                        <Field name="name" type="text"  placeholder="Nombre del producto" className='
                    w-full p-2 
                     outline-none  '/>
                      <ErrorMessage
                  component="p"
                  className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                  name="name"
                />
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="descripción"className='mx-2 text-sm'>Descripción</label>
                        <div className="input flex items-center">
                            <div className="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/></svg>
                            </div>
                        <Field name="description" type="text"  placeholder="Descripción" className='
                    w-full p-2 
                     outline-none  '/>
                        <ErrorMessage
                  component="p"
                  className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                  name="description"
                />
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="name"className='mx-2 text-sm '>Iva</label>
                        <div className="input flex items-center">
                            <div className="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/></svg>
                            </div>
                        <Field name="iva" type="text" placeholder="Ejemplo 08" className='
                    w-full p-2 
                     outline-none  '/>
                      <ErrorMessage
                  component="p"
                  className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                  name="iva"
                />
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="price"className='mx-2 text-sm' >Precio compra</label>
                        <div className="input flex items-center">
                            <div className="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="M11.025 21v-2.15q-1.325-.3-2.287-1.15q-.963-.85-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825q.737.625 1.937.625q1.025 0 1.738-.462q.712-.463.712-1.438q0-.875-.55-1.388q-.55-.512-2.55-1.162q-2.15-.675-2.95-1.612q-.8-.938-.8-2.288q0-1.625 1.05-2.525q1.05-.9 2.15-1.025V3h2v2.1q1.25.2 2.063.912q.812.713 1.187 1.738l-1.85.8q-.3-.8-.85-1.2q-.55-.4-1.5-.4q-1.1 0-1.675.488q-.575.487-.575 1.212q0 .825.75 1.3q.75.475 2.6 1q1.725.5 2.613 1.587q.887 1.088.887 2.513q0 1.775-1.05 2.7q-1.05.925-2.6 1.15V21Z"/></svg>
                            </div>
                        <Field name="priceBuy" type="text" placeholder="Ej: 12.000" className='
                    w-full p-2 
                     outline-none  '/>
                      <ErrorMessage
                  component="p"
                  className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                  name="priceBuy"
                />
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="price"className='mx-2 text-sm'>Precio Venta</label>
                        <div className="input flex items-center">
                            <div className="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="M11.025 21v-2.15q-1.325-.3-2.287-1.15q-.963-.85-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825q.737.625 1.937.625q1.025 0 1.738-.462q.712-.463.712-1.438q0-.875-.55-1.388q-.55-.512-2.55-1.162q-2.15-.675-2.95-1.612q-.8-.938-.8-2.288q0-1.625 1.05-2.525q1.05-.9 2.15-1.025V3h2v2.1q1.25.2 2.063.912q.812.713 1.187 1.738l-1.85.8q-.3-.8-.85-1.2q-.55-.4-1.5-.4q-1.1 0-1.675.488q-.575.487-.575 1.212q0 .825.75 1.3q.75.475 2.6 1q1.725.5 2.613 1.587q.887 1.088.887 2.513q0 1.775-1.05 2.7q-1.05.925-2.6 1.15V21Z"/></svg>
                            </div>
                            <Field name="price" type="text" placeholder="Ej: 12.000" className='
                    w-full p-2 
                     outline-none  '/>
                      <ErrorMessage
                  component="p"
                  className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                  name="price"
                />
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg">
                        <label htmlFor="name"className='mx-2 text-sm '>Estado</label>
                        <div className="input flex items-center">
                            <div className="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/></svg>
                            </div>
                        <Field name="estado" type="text" placeholder="Ejemplo Activo" className='
                    w-full p-2 
                     outline-none  '/>
                        </div>
                        
                    </div>
                    <div className="name border border-gray-300 rounded-lg relative">
                        <label htmlFor="price"className='mx-2 my-2 text-sm '>Fecha de caducidad</label>
                        <div className="input flex items-center">

                    <div className="fecha w-full">
                    
    
                 <RangePicker disabledDate={disabledDate}
                 
                    onChange={onChange}
                    className='w-full p-2 outline-none border border-white rounded-lg
                    
                    focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
                    '
                 />

                    </div>
                        </div>
                        
                    </div>
                   
                    <div
                       
                    >
                    <div className="name border border-gray-300 rounded-lg cursor-pointer"
                      onClick={()=> setActive(!active)}
                    >
                        <label htmlFor="price"className='mx-2 mb-2 mt-1 block text-sm  '>Seleccionar categoria</label>
                        {
                            category.length > 0 ? (
                                
                                <>
                            <div className="input flex my-2 justify-between items-center "
                             
                             
                            >
                            <div className="iconC mt-0 mx-2">
                            {
                                category[1]
                             }
                            </div>
                            <div className="icon2 mt-0 mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="12" cy="12" r="9" fill="#ccc" fill-opacity=".3"/><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"/></path></g></svg>
                            </div>

            
                        </div>
                                </>
                            ):(

                        <div className="input flex justify-between items-center">
                            <div className="iconC m-2    block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4z"/></svg>
                            </div>
                            <div className="icon2 m-2  block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ccc" stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"/></svg>
                            </div>

            
                        </div>
                            )
                        }
                        <div className={
                            active === false ? " hidden mt-20 " : " mt-0 block  duration-700"
                        }>
                        <div className="contenedor-category 
                         h-44 overflow-y-scroll bg-white  bg-while shadow-2xl rounded-xl p-4 absolute grid grid-cols-3">
                            {
                              dataGategorias.map(item => (
                                
                               
                                
                                <div className="category flex border
                                 border-gray-300 gap-4 rounded-md w-auto m-1 p-2 cursor-pointer " key={item._id}
                                 onClick={() => setCategoria([item._id, item.name_category])}
                                 >
                                    <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect width="10" height="10" x="1" y="1" fill="#ccc" rx="1">
                                            <animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/>
                                            <animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/>
                                            <animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/>
                                            <animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/>
                                            </rect><rect width="10" height="10" x="1" y="13" fill="#ccc" rx="1">
                                                <animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/>
                                                <animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/>
                                                <animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/>
                                                <animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/>
                                                </rect><rect width="10" height="10" x="13" y="13" fill="#ccc" rx="1">
                                                    <animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/>
                                                    <animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/>
                                                    <animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/>
                                                    <animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect></svg>

                                    </div>
                                    <div className="text">
                                        <p className='truncate w-12' title={item.name_category}>{item.name_category}</p>
                                    </div>

                        </div>
                              ))
                            }
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="f"></div>
                    <div className=" col-span-2">
                        {
                            loading === true ? (

                        <button className="bg-[#5994f5] text-white p-2 rounded-full w-full" type="submit">
                            Crear producto</button>
                            ):(
                            <span
                         
                          className="bg-[#5994f5] text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-[#5994f5] hover:shadow-lg justify-center p-2
                          disabled flex items-center"
                        >
                         <svg className="animate-spin mr-1 flex justify-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingFill0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient><linearGradient id="mingcuteLoadingFill1" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stop-color="currentColor" stop-opacity="0"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient></defs><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="url(#mingcuteLoadingFill0)" d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z" transform="translate(1.5 1.625)"/><path fill="url(#mingcuteLoadingFill1)" d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z" transform="translate(1.5 1.625)"/></g></svg>
                          Espere un momento...
                        </span>

                            )
                        }
                    </div>
                    <div className="d"></div>
                    <div className="d"></div>
                </Form>


               </Formik>

        </div>
    
    </div>
    </div>
    </>
  )
}
