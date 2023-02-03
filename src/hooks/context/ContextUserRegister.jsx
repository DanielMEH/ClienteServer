import {useContext, createContext, useState} from 'react';

import { PostDataAdmin } from "../../apis/ApiData"

export const contextUserRegis = createContext();

export const usePostRegister = () => {
    const contextUser = useContext(contextUserRegis);
    return contextUser;
}

export const ContextUserRegister = ({children}) => {
    const [getUserPost, setGetUserPostAuth] = useState([]);

    const getPostRegister = async (postDataAdmin) => {
        try {
            const response = await PostDataAdmin(postDataAdmin);
            return response;
        } catch (error) {
            return error;
        }
    }

    return <contextUserRegis.Provider value={{
        getPostRegister,
        getUserPost,
        setGetUserPostAuth
    }}>
        {children}
    </contextUserRegis.Provider>
}