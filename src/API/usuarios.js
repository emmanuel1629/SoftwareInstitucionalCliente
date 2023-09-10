import axios from "axios";
const API ="http://localhost:3000/API";


export const peticionRegistrar =  listaUsuarios => axios.get(`${API}/usuarios`,listaUsuarios);
