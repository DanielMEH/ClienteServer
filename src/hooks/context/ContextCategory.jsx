import React,{createContext,useContext,useState} from 'react'


const createContextCategory = createContext()

export const useContextCategory = ()=>{
    
    const context =  useContext(createContextCategory)
    return context
}


export const ContextCategory = ({children}) => {
    const [name,setName] = useState('hola') 
  return (
    <createContextCategory.Provider value={{
        name,
        setName
    }}>
        {children}
    </createContextCategory.Provider>
  )
}
