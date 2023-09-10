import React from 'react'
import { Route , Routes  } from 'react-router-dom'

import PaginaRegistrarse from '../paginas/PaginaRegistrarse.jsx'
import PaginaLogin from '../paginas/PaginaLogin.jsx';
import PaginaPrincipal from '../paginas/PaginaPrincipal.jsx';
import PaginaDashboard from '../paginas/PaginaDashboard.jsx';
import PaginaDePruebas from '../paginas/PaginaDePruebas.jsx';

import ComponenteValidador from '../componentes/ComponenteValidador.jsx';

PaginaDePruebas

function RouterComponent() {
  return (
    <>
        <Routes>

            <Route path='/' element={<PaginaPrincipal/>}/>
            <Route path='/login' element={<PaginaLogin/>}/>
            <Route path='/registrarse' element={<PaginaRegistrarse/>}/>
            <Route path='/pruebas' element={<PaginaDePruebas/>}/>
    
            <Route element={<ComponenteValidador/>}>
              <Route path='/dashboard' element={<PaginaDashboard/>}/>
            </Route>


        </Routes>
    </>
  )
}

export default RouterComponent