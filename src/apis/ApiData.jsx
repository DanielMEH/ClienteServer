import axios from "axios"
let urlServer = "http://localhost:3002"
let accessToken=localStorage.getItem("secure_token")
export const PostDataUser = async (postDataUser) => await axios.post(`${urlServer}/login`, { postDataUser})
export const postRecoveryEmail = async (email) => await axios.post(`${urlServer}/recovery`, { email})
export const recoverycode = async (data) => await axios.post(`${urlServer}/recoverycode`, { data})
export const newPassword = async (data) => await axios.post(`${urlServer}/newPass`, { data})
export const AuthGoogle = async data => await axios.post(`${urlServer}/authgoogleAccount`, { data})
export const PostDataAdmin = async (postDataAdmin) => await axios.post(`${urlServer}/register`, { postDataAdmin})
export const  getDataAdmin = async (tokenData) => await axios.post(`${urlServer}/getsataAdminr/${tokenData}`)
export const  getDataAll = async () => await axios.get(`${urlServer}/getAdminAll/${accessToken}`)

export const tokenData = async (tokenData,token) => await axios.post(`${urlServer}/register`, {tokenData},{
    headers: {
        "acc-token-data":token
    }
})
export const PostDataUserRegister = async (postDataUserRegister) => await axios.post(`${urlServer}/registerUser`, { postDataUserRegister},{
    headers: {
        "acc-token-data":accessToken
    }
    })
    export const UploadcsvUsuario = async (formDataCsv,archivousuariocsv) => await axios.post(`${urlServer}/uploadcsvUsers`, { formDataCsv,archivousuariocsv},{
        headers: {
            "acc-token-data":accessToken,
            "Content-Type": "multipart/form-data"
            
        }
    })
    
    export const getUsersAdmin = async (isAllowedToken) => await axios.get(`${urlServer}/getUsersData/${isAllowedToken}`,)
    export const getDataCountUsersAdmin = async (isAllowedToken) => await axios.get(`${urlServer}/countUsers/${isAllowedToken}`,)
    
export const DeleteuserPost = async (deleteData) => await axios.post(`${urlServer}/deleteUser`, {deleteData},{
    headers: {
        "isallowed-x-token":accessToken
    }
    })


export const setModule = async (data) => await axios.post(`${urlServer}/setModule`, {data},{
    headers: {
        "isallowed-x-token":accessToken
    }

})
export const GetModule = async (id) => await axios.get(`${urlServer}/getModuleUsers/${id}`,{
    headers: {
        "isallowed-x-token":accessToken
    }

})
export const DeleteModule = async (id) => await axios.post(`${urlServer}/deleteModuleUser`,{id},{
    headers: {
        "isallowed-x-token":accessToken
    }

})
// ? Path: src\apis\ApiData.jsx subir imagen ADMINISTRADORE
export const uploadImg = async (imgData) => await axios.put(`${urlServer}/AuploadImageA`,{imgData},{
    headers: {
        "token-x-id":accessToken,
        "Content-Type": "multipart/form-data"
    }

})
// ? Path: src\apis\ApiData.jsx actualizar datos ADMINISTRADORE
export const UpdateAdminAll = async (data) => await axios.put(`${urlServer}/updateAdminALL`,{data},{
    headers: {
        "token-x-id":accessToken
    }

})

// ? post categorias
export const postCategorias = async (data) => await axios.post(`${urlServer}/category`,{data},{
    headers: {
        "x-id-token":accessToken
    }

})
// ? obtiene todos los productos
export const getProducts = async () => await axios.get(`${urlServer}/getProducts`)