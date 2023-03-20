import React from 'react'
import eye from "../assets/icons/eye.svg";
import Swal from 'sweetalert2'
import "../assets/css/styleSlider.css"
import {useContextCategory} from "../hooks/context/ContextCategory"

import  {useNavigate} from "react-router-dom"
function OpcionesCategory(e) {

    const {deleteCategorys,updateCategorys} = useContextCategory()
        const deleteId = async() => {
        console.log(e.data);
await  Swal.fire({
  text: `
  Al eliminar esta categoria se perderan todos los productos asignados a esta categoria \n
 `,
  footer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F4D03F" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
  <p href="" style="color:#5DADE2; margin:0px 5px"> ${e.data.name_category} </p>`,
    showClass: {
        popup: 'animate__animated animate__fadeIn',
    },
    background: 'white',

    color: 'black',
    border: '1px solid #5DADE2',
    backdrop:"8px",
    customClass: 'swal-wide',
    showCancelButton: true,
    confirmButtonColor: '#1daf53',
    focusCancel: false,
    focusConfirm: false,
    cancelButtonColor: '#ccc',
    confirmButtonText: 'Continuar',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
        let id =e.data._id
        console.log(id);
         await  deleteCategorys(id)
      Swal.fire({
        icon: 'success',
        title: `Exito`,
        text: "La categoria se elimino correctamente",
        customClass: 'swal-wide',
        showClass: {
            popup: 'animate__animated animate__fadeIn',
        },
        focusCancel: false,
        focusConfirm: false,
        confirmButtonColor: '#1daf53',
        confirmButtonText: 'Aceptar',
        color: 'black',
        timer: 1000,
        background:"white"


    }
      )
    }else if(result.isDismissed){
       await Swal.fire({
        className: 'swal-wide',

            text: "se cancelo la eliminacion de la categoria",
            showClass: {
                popup: 'animate__animated animate__fadeIn',
            },
            focusCancel: false,
            focusConfirm: false,
            confirmButtonColor: '#1daf53',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Continuar',
            color: 'black',
            background:"white",
            timer: 2000,

        })
    }



})
    }
    const EditId = () => {
    
        // navigate(`/update/category/${e.data._id}`)
        // crear un modal para editar la categoria
        Swal.fire({
            title: 'Editar categoria',
            html: `<input id="swal-input1"
            style="margin-bottom: 10px; background-color: #FFF;
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input"
            
            placeholder="Nombre de la categoria" value="${e.data.name_category}">
            <input id="swal-input2"
            style="margin-bottom: 10px; background-color: #FFF;
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input" placeholder="Descripcion de la categoria" value="${e.data.description}">
            `,
            
            focusConfirm: false,
            focusCancel: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            showClass: {
                popup: 'animate__animated animate__fadeIn',
            },
            showLoaderOnConfirm: true,
            preConfirm: () => {
                
                const name_category = Swal.getPopup().querySelector('#swal-input1').value
                const description = Swal.getPopup().querySelector('#swal-input2').value
            console.log(name_category);
            console.log(description);
                if (!name_category || !description) {
                    Swal.showValidationMessage(`El nombre de la categoria es requerido`)
                }
                return { name_category,description }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            console.log(result.value);
            if (result.isConfirmed) {
                let data ={
                    name_category:result.value.name_category,
                    description:result.value.description
                }
                console.log(e.data._id);
               let response = updateCategorys(e.data._id,data)
               console.log(response);
            }
        })
    }

  return (
    <div>
        <button

        onClick={deleteId} className="icon-sm text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="red" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        <button onClick={EditId}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="#28D87D" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></button>

    </div>
  )
}

export default OpcionesCategory