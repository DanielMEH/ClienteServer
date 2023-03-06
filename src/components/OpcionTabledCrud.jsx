import React from 'react'
import eye from "../assets/icons/eye.svg";
import Swal from 'sweetalert2'
import "../assets/css/styleSlider.css"
import {useGetUsers} from "../hooks/context/GetUsersContext"
import  {useNavigate} from "react-router-dom"
function OpcionTabledCrud(e) {
    const navigate = useNavigate()

    const { usersDeleteData,getActivosUsers,getInactivosUsers,setGetInactivosUsers,setGetActivosUsers, } = useGetUsers();
    const deleteId = async() => {
await  Swal.fire({
  text: `
  Al eliminar este usuario no podra acceder a la plataforma y sus datos se perderan \n 
 `,
  footer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F4D03F" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
  <p href="" style="color:#5DADE2; margin:0px 5px"> ${e.data.correo} </p>`,
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
        let id =e.data.idAccount
         await  usersDeleteData(id)
          
        if (e.data.estado === "Activo") {
            setGetActivosUsers(getActivosUsers-1)
            
        }else{
            setGetInactivosUsers(getInactivosUsers-1)
        }
       
      Swal.fire({
        icon: 'success',
        title: `Exito`,
        text: "el usuario se elimino correctamente",
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

            text: "se cancelo la eliminacion del usuario",
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
    const editId = () => {
        alert("hola")
        return <>
        <div>Holaaa</div>
        
        </>
    }
    const isAlowedId = () => {
        console.log(e.data)

        navigate(`/permisions/${e.data.idAccount}`)
    }
  return (
    <div>

        <button onClick={isAlowedId }>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
            <path fill="#A1A1A1" d="M160 16a80.1 80.1 0 0 0-76.1 104.8l-57.6 57.5A8.1 8.1 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8.1 8.1 0 0 0 5.7-2.3l9.5-9.6A80 80 0 1 0 160 16Zm20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/></svg>
            
                </button>
        <button
        
        onClick={deleteId} className="icon-sm text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="red" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        <button onClick={editId}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="#28D87D" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></button>
       
    </div>
  )
}

export default OpcionTabledCrud