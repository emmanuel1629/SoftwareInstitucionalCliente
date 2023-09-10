import React from 'react'

function PaginaUsuario({Toggle}) {
  return (
    <div className='px-4'>
    <i className='navbar-brand bi bi-justify-left fs-4 bg-transparent' onClick={Toggle}></i>

        <div className="container-fluid">
            <div className="row g-3 my-2">
                <div className="col-md-3">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 className='fs-2'>250</h3>
                            <p className='fs-5'>Products</p>
                        </div>
                        <i className='bi bi-cart-plus p-3'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaginaUsuario