import React from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom'

export const ProtectedRouter = ( { isAllowed, children,redirectTo="/inventario"} ) => {

  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }
  // const navigate = useNavigate()
  return children ? children : <Outlet />
}
