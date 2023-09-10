import React from 'react';
import './cssComponentes.css';

const estiloTexto = {
  maxWidth: '150px', // Establece el ancho máximo que prefieras
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function ComponenteSideBar() {
  return (
    <div className='bg-white mt-5 d-block sidebar'>
      <div className='divDash'>
        <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
        <span className='brand-name fs-5' style={estiloTexto}>emmanuel areiza</span>
      </div>

      <hr className='text-dark' />

      <div className="list-group">
        <a className='list-group-item'>
          <i className='bi bi-speedometer2 fs-5 '></i>
          <span className='fs-5' style={estiloTexto}>DashBoard</span>
        </a>

        <a className='list-group-item'>
          <i className='bi bi-house fs-5 '></i>
          <span className='fs-5' style={estiloTexto}>Pagina Principal</span>
        </a>
      </div>
    </div>
  )
}

export default ComponenteSideBar;