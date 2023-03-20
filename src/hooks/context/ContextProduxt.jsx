import React,{useContext, createContext,useState} from 'react'
import { getProducts,postProductos,deleteproducto, updateProducto} from '../../apis/ApiData'
export const  contextProduct = createContext();

export const useContextProduct = () => {
    const context = useContext(contextProduct);
    return context;
}



export const ContextProduxt = ({children}) => {

    const [dataProduct, setDataProduct] = useState([])

    const getProductsAll = async () => {
      const products = await getProducts()
      setDataProduct(products.data.products)
      return products
    }
    const postProducts = async (data) => {
      const products = await postProductos(data)
      const dataPost = {
        _id:products.data.data._id,
        name:products.data.data.name,
        description:products.data.data.description,
        price:products.data.data.price,
        priceBuy:products.data.data.priceBuy,
        fechaFin:products.data.data.fechaFin,
        iva:products.data.data.iva,
      }
      setDataProduct([...dataProduct,dataPost])
      return products
    }
    const deleteProduct = (id) =>{
      const deleteProducts = deleteproducto(id)
      setDataProduct(dataProduct.filter((item) => item._id !== id))
      return deleteProducts
    }

    const updateProduct = (id,data) =>{
      const updateProducts = updateProducto(id,data)
      setDataProduct(dataProduct.map((item) => item._id === id ? data : item))
      return updateProducts
    }
  return (
    <contextProduct.Provider value={{
        getProductsAll,
        dataProduct,
        postProducts,
        deleteProduct,
        updateProduct

    }}>
        {children}
    </contextProduct.Provider>
  )
}
