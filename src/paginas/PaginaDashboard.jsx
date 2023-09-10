import React ,  { useState }from 'react'
import ComponenteSideBar from '../componentes/ComponenteSideBar.jsx';
import PaginaUsuario from './PaginaUsuario.jsx';
import { usarContextoAutenticacion } from '../contexto/ContextoAutenticacion.jsx';

function PaginaDashboard() {
  const [Toggle, setToggle] = useState(true)
  const contraerTogle = ()=>{
    setToggle(!Toggle)
  }

  const {Usuario} = usarContextoAutenticacion();

  return (
  
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {Toggle  && <div className="col-md-3 bg-white vh-100">
          <ComponenteSideBar />
        </div>}

        <div className="col">
          <PaginaUsuario Toggle={contraerTogle}/>
        </div>
      </div>

    </div>
  )
}

export default PaginaDashboard