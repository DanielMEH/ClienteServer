import { useState } from "react";
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
export const Router = () => {
  const token = localStorage.getItem("secure_token");
  const perfil_rol = localStorage.getItem("perfil_rol");
  const module = localStorage.getItem("module")
  let type = localStorage.getItem("type")
  
  
  let usersData = {
    tokeVerify:"",
    permisions: [],
  };
  if(type === "user"){
    
    const obj = module.titulo
    let toke = token ? token : null;
    let permision = "module" ? obj : null;
    usersData.tokeVerify = toke
    usersData.permisions = permision
  }else{
    let tokeVerify = token ? token : null;
    let permision = perfil_rol ? perfil_rol : null;

    usersData.permisions.push(perfil_rol)
    usersData.tokeVerify = tokeVerify
    
  }
  const [users, setUsers] = useState(usersData);
  console.log(users);

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
            element={
              <ProtectedRouter
                isAllowed={
                  !!users.tokeVerify && users.permisions.includes("superAdmin")
                }
                redirectTo="/inventario"
              />
            }
          >
            
          </Route>
          <Route
            path="/inventario"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin", "inventario")
                }
              >
                <Inventory />
              </ProtectedRouter>
            }
          />
          <Route
            path="/Category"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin", "categoria")
                }
              >
                <Category />
              </ProtectedRouter>
            }
          />
          <Route path="/dasboard" element={<Admin />} >

              
            </Route>
          <Route
            path="/usuarios"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin", "usuario")
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
                  !!users && users.permisions.includes("superAdmin", "usuario")
                }
              >
                <Notification />
              </ProtectedRouter>
            }
          />
          <Route
            path="/notificaciones"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin", "notificaciones")
                }
              >
                <Notification />
              </ProtectedRouter>
            }
          />
          <Route
            path="/productos"
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes("superAdmin", "productos")
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
                  !!users && users.permisions.includes("superAdmin", "categorias")
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
                  !!users && users.permisions.includes("superAdmin", "proveedores")
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
                  !!users && users.permisions.includes("superAdmin", "estadisticas")
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
                  !!users && users.permisions.includes("superAdmin", "Perfil")
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
                  !!users && users.permisions.includes("superAdmin", "compras")
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
                  !!users && users.permisions.includes("superAdmin", "Planificadora")
                }
              >
                <Shope />
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
