import React,{useEffect} from 'react'
import  {useGetUsers} from "../hooks/context/GetUsersContext"

export const Prueba =  () => {

    const {getUsersAdmins,getUsers} =useGetUsers()
   useEffect(() => {
    getUsersAdmins()
   },[])
    
  
  return (
    <div>

        {getUsers.map((user)=>(
            <div key={user.idAccount}>
                <span>

                    {user.correo}
                </span>

            </div>
        ))}
    </div>
  )
}
