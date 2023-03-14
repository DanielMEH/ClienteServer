import React, { useEffect, useState } from 'react'
import "../assets/css/CambioFotoPerfilAdmin.css"
import {useGetUsers} from '../hooks/context/GetUsersContext'
export const CambioFotoPerfilAdmin = () => {
    const { uploadImgAdminAll } = useGetUsers()
    const [view, setView] = useState(true)
    const [Image, setImage] = useState([])
    const [load, setLoad] = useState(true )
   function dragOverHandler() {
    const dropArea = document.querySelector(".drag-area");
    const dragText = dropArea.querySelector("h2");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("#input-file");
  
    
    button.addEventListener("click", () => {
        input.click();
    })
    input.addEventListener("change",(e)=>{
        let file = e.target.files[0];
        dropArea.classList.add("active");
        showFile(file);
        dropArea.classList.remove("active");

        setImage(e.target.files[0])
    })

   
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "Suelta para subir la imagen";
    })
    dropArea.addEventListener("dragleave", (e) => {
        e.preventDefault();
        dropArea.classList.remove("active");
        dragText.textContent = "Arrastra una imagen aquí";
    
    })
    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dragText.classList.remove("active");
        dragText.textContent = "Arrastra una imagen aquí";
        showFile(e.dataTransfer.files);
       
        setImage(e.dataTransfer.files[0])
    
    })
    function showFile(file){
        if(file.length === undefined){
            processFile(file);
        }else{
            if(file.length > 1){
                alert("Solo puedes subir una imagen");
                dropArea.classList.remove("active");
                return;
            }else{
                processFile(file[0]);
            }
          
            
        }
    }
    
    function processFile(file){
    
        const fileType = file.type;
        const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if(validExtensions.includes(fileType)){
            const fileReader = new FileReader();
    
            fileReader.addEventListener("progress", e=>{
                 Math.round((e.loaded / e.total) * 100);
                
    
            })
            fileReader.addEventListener("loadend", e=>{
    
                console.log("File loaded");
            })
    
            fileReader.addEventListener("load", e=>{
                const fileUrl= e.target.result;
                if(document.querySelector("#preview").innerHTML != ""){
                    document.querySelector("#preview").innerHTML = "";
                    let image = `
                <div id="1" class="file-container">
                    <img src="${fileUrl}" alt="${file.name} "
                    style="width: 200px; height: 200px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    >
                    <div class="status">
                    <span class=""></span>
                    </div>
                </div>
                    `;
                    const html = document.querySelector("#preview").innerHTML;
                    document.querySelector("#preview").innerHTML = html + image;
                
                }else{
                      
             
                let image = `
                <div id="1" className="file-container">
                    <img src="${fileUrl}" alt="${file.name} "
                    style="width: 200px; height: 200px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    >
                    <div className="status">
                    <span className=""></span>
                    </div>
                </div>
                    `;
                    const html = document.querySelector("#preview").innerHTML;
                    document.querySelector("#preview").innerHTML = html + image;
                }
                
    
            });
            fileReader.readAsDataURL(file);
            uploadFile(file);
        }else{
            alert("Formato no válido");
            dropArea.classList.remove("active");
            return;
        }
    
    }
    
    function uploadFile(file){
      
    }
   }
   useEffect(() => {

    dragOverHandler();
    }, [])
    
    const uploadImg = async () => {
       setLoad(false)
       await  uploadImgAdminAll(Image)
       await window.location.reload()
       setLoad(true)
    }
  return (
    <>
    <div className={view === true ? "block resize" : "hidden"
    }>
      <div className="container_v resize">
   <div className="">
    <button className="absolute top-0 left-0" onClick={()=>{
        setView(true)
        setView(false)
     } }>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path fill="#5994f5"   d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"/></svg>
    </button>
   </div>
    <div className="drag-area">
        <h2>Arrastra una imagen aquí</h2>
        <span>O</span>
        <button >Subir imagen desde mi computador</button>
        <input type="file" name="imagen" id="input-file" hidden 
        
         
         
        />
    </div>
    <div id="preview"></div>
    <div className="input mx-2">
                      {
                        load === false? (
                          <button
                          type="button"
                          className="bg-[#5994f5] text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-[#5994f5] hover:shadow-lg justify-center p-2
                          disabled flex items-center"
                        >
                         <svg className="animate-spin mr-1 flex justify-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingFill0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient><linearGradient id="mingcuteLoadingFill1" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stop-color="currentColor" stop-opacity="0"/><stop offset="100%" stop-color="currentColor" stop-opacity=".55"/></linearGradient></defs><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="url(#mingcuteLoadingFill0)" d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z" transform="translate(1.5 1.625)"/><path fill="url(#mingcuteLoadingFill1)" d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z" transform="translate(1.5 1.625)"/></g></svg>
                          Espere un momento...
                        </button>
                        ):(
                        <button  onClick={uploadImg}
                          className="bg-gray-400 text-white block w-full rounded-sm mt-3 p-2
              duration-300  hover:shadow-lg "
                        >
                          <div className="span">
                          Subir imagen
                          </div>
                        </button>

                        )
                      }
                      </div>
   </div>
    </div>
    </>
  )
}
