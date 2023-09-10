import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { usarContextoAutenticacion } from "../contexto/ContextoAutenticacion"; 
import { peticionCerrarSesion } from "../API/autenticacion.js";

import "./cssComponentes.css";

function ComponenteNavBar() {
  const {Usuario} = usarContextoAutenticacion();
  console.log(Usuario);
    return (
        <>
        <Navbar bg="light" expand="lg" data-bs-theme="light" className="custom-navbar">
            <Container>
            <Navbar.Brand className="Brand" href="/">Software-Academico</Navbar.Brand>
              <Nav  className="ms-auto">
                <Nav.Link href="/pruebas">Pruebas</Nav.Link>

                {Usuario ? (
                  <>
                   <Nav.Link href="/"><i onClick={()=>{peticionCerrarSesion()}} className="bi bi-x-circle-fill">Cerrar Sesion</i></Nav.Link>
                   <Nav.Link href="/dashboard">dashboard</Nav.Link>
                  </>
                  ) : 
                  (<>
                    <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </>)}
        
              </Nav>
              
            </Container>
        </Navbar>   
        </>
      )
}

export default ComponenteNavBar