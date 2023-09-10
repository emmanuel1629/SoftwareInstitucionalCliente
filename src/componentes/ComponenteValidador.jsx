import React from 'react'
import { usarContextoAutenticacion } from '../contexto/ContextoAutenticacion';
import { Navigate , Outlet } from "react-router-dom";
function ComponenteValidador() {
    const { Autenticado } = usarContextoAutenticacion();

    if(!Autenticado) return <Navigate to='/login' replace/>

  return <Outlet/>
}

export default ComponenteValidador