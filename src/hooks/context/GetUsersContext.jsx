import React,{useState,createContext,useContext} from 'react'
import {getUsersAdmin,DeleteuserPost,UploadcsvUsuario,PostDataUserRegister,getDataCountUsersAdmin} from '../../apis/ApiData'

let isAllowedToken=localStorage.getItem("secure_token")
export const GetUsersDataAdmin = createContext()

export const useGetUsers = () => {
    const contextUser = useContext(GetUsersDataAdmin)
    return contextUser;
}

export const GetUsersContext = ({children}) => {
    const [getUsers, setGetUsers] = useState([])
    const [getActivosUsers, setGetActivosUsers] = useState([])
    const [getInactivosUsers, setGetInactivosUsers] = useState([]) 
    const [getCountDateUsers, setGetCountDateUsers] = useState([])
    const getCountData = async () => {
        try {
            const response = await getDataCountUsersAdmin(isAllowedToken);
            setGetCountDateUsers(response.data.countUsers)
            setGetActivosUsers(response.data.stateActive
                )
            setGetInactivosUsers(response.data.stateInactive)
            
            
        } catch (error) {
          
            return error
        }
      }

    const getUsersAdmins = async () => {
        try {
            const response = await getUsersAdmin(isAllowedToken)
            
            setGetUsers(response.data.data)
        } catch (error) {
            return error
        }
    }

    const usersDeleteData = async (id) => {
        try {
         
        await DeleteuserPost(id)
        return setGetUsers(getUsers.filter(getuser => getuser.idAccount !==id))
           
        } catch (error) {
            return error
        }

    }
    const postUploadcsvUsuario = async (formDataCsv,archivousuariocsv) => {
        try {
            const response = await UploadcsvUsuario(formDataCsv,archivousuariocsv);
           
            setGetUsers([...getUsers,response.data.data])
            return response;
        } catch (error) {
            return error;
        }
      }
      const UserRegister = async (postDataUserRegister) => {
        try {
            const response = await PostDataUserRegister(postDataUserRegister);
          
            setGetUsers([...getUsers,response.data.data[0][0]])
            return response;
        } catch (error) {
            return error;
        }
      }

  return (
    <GetUsersDataAdmin.Provider value={{
        getUsers,
        setGetUsers,
        getUsersAdmins,
        usersDeleteData,
        postUploadcsvUsuario,
        UserRegister,
        getCountData,
        getCountDateUsers,
        getActivosUsers,
        getInactivosUsers
    }}>

        {children}
    </GetUsersDataAdmin.Provider>
  )
}
