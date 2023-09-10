import axios from "./axios";


export const peticionRegistrar =  usuarioCreado => axios.post(`/registrarse`,usuarioCreado);
export const peticionIngresar =  credencialesDelUsuario => axios.post(`/login`, credencialesDelUsuario);
export const peticionCerrarSesion =  mensajeServidor => axios.post(`/cerrar`, mensajeServidor);

export const verificarCookie = () => axios.get('/verificarCookie');