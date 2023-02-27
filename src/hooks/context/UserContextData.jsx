
import React, { createContext, useState, useContext } from "react";
import {
  PostDataUser, postRecoveryEmail, recoverycode, newPassword, PostDataAdmin,
AuthGoogle,PostDataUserRegister,UploadcsvUsuario } from "../../apis/ApiData"
export const contextUserAdmin = createContext()

export const usePostAuth = () => {
  const contextUser = useContext( contextUserAdmin );
  return contextUser;
}
export const UserContextData = ( { children } ) => {
  const [getUserPost, setGetUserPostAut] = useState( [] )

  const recoveryPasssword = async ( email ) => {
   try {
     const response = await postRecoveryEmail( email )
    return response
   } catch (error) {
    return error
   }
  }
  const newPasswordL = async ( data ) => {
    try {
      const response = await newPassword( data )
      return response
    } catch (error) {
      return error
    }
  }
  const verifyCodeUser = async ( data ) => {

   try {
     const response = await recoverycode( data );
     return response;
   } catch ( error ) {
      return error;
    
   }
  }
  const getPostLoginAuthGoogle = async ( postDataUser ) => {

    try {
      const response = await AuthGoogle( postDataUser );
      return response
    } catch ( error ) {
      return error
    }
  }
  const getPostLogin= async ( postDataUser ) => {
    try {
      const response = await PostDataUser( postDataUser );
      return response
    } catch ( error ) {
      return error
    }
  }
  const getPostRegister = async (postDataAdmin) => {
    try {
        const response = await PostDataAdmin(postDataAdmin);
        return response;
    } catch (error) {
        return error;
    }
}



  return <contextUserAdmin.Provider value={{

    getUserPost,
    getPostRegister,
    setGetUserPostAut,
    getPostLogin,
    recoveryPasssword,
    verifyCodeUser,
    newPasswordL,
    getPostLoginAuthGoogle,
   


  }}  >

    {children}
  </contextUserAdmin.Provider>

}
