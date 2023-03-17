import React,{useContext, createContext,useState} from 'react'
import { getProducts } from '../../apis/ApiData'
export const  contextProduct = createContext();

export const useContextProduct = () => {
    const context = useContext(contextProduct);
    return context;
}



export const ContextProduxt = ({children}) => {

    const [dataProduct, setDataProduct] = useState([])

    const getProductsAll = async () => {
      const products = await getProducts()
      setDataProduct(products.data)
      return products
    }
  return (
    <contextProduct.Provider value={{
        getProductsAll,
        dataProduct,
    }}>
        {children}
    </contextProduct.Provider>
  )
}
