import { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthUser } from "../components/AuthUser";
import { Signup } from "../components/Signup";
import { UserContextData } from "../hooks/context/UserContextData";
import { Admin } from "../pages/Admin/Admin";
import { HomePage } from "../pages/HomePage";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import RecoveryPass from "../pages/RecoveryPass";
import CodePassword from "../pages/CodePassword";
import NewPassword from "../pages/newPassword";
import { Inventory } from "../layout/Inventory";
import { NotFount } from "../pages/NotFount";
import Header from "../components/Header";
import { Category } from "../layout/Category";
import { Usuarios } from "../layout/Usuarios";
import { Notification } from "../layout/Notification";
import { Product } from "../layout/Product";
import { Provider } from "../layout/Provider";
import { Analitycs } from "../layout/Analitycs";
import { Perfil } from "../layout/Perfil";
import { Shope } from "../layout/Shope";
import { Prueba } from "../layout/Prueba";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { Somos } from "../pages/Somos";
import { Contactanos } from "../pages/Contactanos";
import { ModalModule } from "../components/ModalModule";
import axios from "axios";
import { PlanificCalendar } from "../layout/PlanificCalendar";
import { AyudaAdmin } from "../layout/AyudaAdmin";
import { EditarProduct } from "../components/FormProduct/EditarProduct";

export const Router = () => {

  const [usersP, setUsersP] = useState([]);
  const token = localStorage.getItem("secure_token");
  const token1 = localStorage.getItem("token_token1");
  let type = localStorage.getItem("type")
  let usersData = {
    tokeVerify:"",
    permisions: [],
  };

  useEffect(() => {
    
    async  function getModulesUser(){
      const response = await axios.get(`http://localhost:3002/getMod/${token1}`)
     
      const modules = response.data.data
      console.log(modules);
      modules.map((item)=>{
       return setUsersP([...usersP,usersP.push(item.titulo)])
      })
    }
    getModulesUser()
  }, [])

  console.log(usersP);
  




  if(type === "user"){
    const modules= localStorage.getItem("module") 
    const obj = modules
    let toke = token ? token : null;
    usersData.tokeVerify = toke
    // usersData.permisions = ["inventario"]
    usersData.permisions = usersP
  
  }

  if(type === "superAdmin"){
    let tokeVerify = token ? token : null;
    usersData.permisions= [
      "superAdmin", "inventario", "categoria", "usuario", "notificacion", "producto",
       "proveedor", "compras", "analityc", "perfil", "dasboard","shope","ayudaAdmin"]
    usersData.tokeVerify = tokeVerify
  }

  const [users, setUsers] = useState(usersData)

  return (
    <>
      <UserContextData>
      <GetUsersContext>
       
       
        <Routes>
        <Route path="/prueba" element={<Prueba />} />
          <Route path="*" element={<NotFount />} />

          <Route path="/login" element={<AuthUser />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/newPassword+auth=true" element={<NewPassword />} />
          <Route
            path="/recovery+password/identify"
            element={<RecoveryPass />}
          />
          <Route path="/verifyc+code/identify" element={<CodePassword />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route index element={<HomePage />} />
          <Route
            path="/inventario"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("inventario")
                }
              >
                <Inventory />
              </ProtectedRouter>
            }
          />
            <Route
            path="/ayudaAdmin"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("ayudaAdmin")
                }
              >
                <AyudaAdmin />
              </ProtectedRouter>
            }
          />
          <Route
            path="/categorias"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("categoria")
                }
                redirectTo="/inventario"
              >
                <Category />
              </ProtectedRouter>
            }
          />
          <Route path="/dasboard"  element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("dasboard")
                }
              >
                <Admin />
              </ProtectedRouter>
            } >

              
            </Route>
          <Route
            path="/usuarios"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("usuario")
                }
              >
                <Usuarios />
              </ProtectedRouter>
            }
          />
          <Route
            path="/notificaciones"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("notificacion")
                }
              >
                <Notification />
              </ProtectedRouter>
            }
          />
              <Route
            path="/permisions/:id"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin")
                }
              >
                <ModalModule/>
              </ProtectedRouter>
            }
          />
          <Route
            path="/notificaciones"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("notificacion")
                }
              >
                <Notification />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/productos/editar/:id"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users 
                }
              >
                <EditarProduct/>
              </ProtectedRouter>
            }
          />
          <Route
            path="/productos"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("producto")
                }
              >
                <Product />
              </ProtectedRouter>
            }
          />
          <Route
            path="/categorias"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("categorias")
                }
              >
                <Category />
              </ProtectedRouter>
            }
          />
          <Route
            path="/proveedores"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("proveedor")
                }
              >
                <Provider />
              </ProtectedRouter>
            }
          />
          <Route
            path="/estadisticas"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("analityc")
                }
              >
                <Analitycs />
              </ProtectedRouter>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin")
                }
              >
                <Perfil/>
              </ProtectedRouter>
            }
          />
          <Route
            path="/compras"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("compras")
                }
              >
                <Shope />
              </ProtectedRouter>
            }
          />
          <Route
            path="/Planificadora"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin")
                }
              >
                <PlanificCalendar />
              </ProtectedRouter>
            }
          />
          <Route path="/somos" element={<Somos />}/>
          <Route path="/contactanos" element={<Contactanos />}/>
          

      

        </Routes>
          </GetUsersContext>
      </UserContextData>
    </>
  );
};
