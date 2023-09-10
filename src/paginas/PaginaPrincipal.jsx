import React from 'react';


function PaginaPrincipal() {
  return (
    <div className='container'>

        <div className='PaginaPrincipal row p-5 mb-2 mt-2'>
            <div className="col-md-12">

              <div>
                <h1>Inspira <span id="resaltado-azul">Conecta</span> Crece</h1>
                <p>Descubre talentos excepcionales y potencia tùs proyectos <br />
                Tu lugar para conectar con grandes colaboradores. <span id="resaltado-azul">¡ Ùnete Ahora !.</span></p>

              </div>

              <div className='input-group'>
                  <input type="text" className="form-control form-control-sm" placeholder="Escribe algo..." />
                  <button className="btn btn-primary">Enviar</button>
              </div>
                    
            </div>
        </div>

        <div className="row mt-5">

          <div className='col-md-3'>
           

          </div>

          <div className='col-md-6'>
         
         
          </div>

          
          <div className='col-md-3'>
           
         
          </div>


        </div>

    </div>
  )
}

export default PaginaPrincipal