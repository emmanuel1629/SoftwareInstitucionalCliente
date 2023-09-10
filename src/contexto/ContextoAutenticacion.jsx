import { createContext , useState , useContext , useEffect } from 'react';
import { peticionRegistrar ,peticionIngresar ,verificarCookie } from "../API/autenticacion";
import Cookies from 'js-cookie';


export const ContextoAutenticacion = createContext();

export const usarContextoAutenticacion = () => {

    const contextoAutenticacion = useContext(ContextoAutenticacion);
    if(!contextoAutenticacion){
        throw new Error("El contexto debe ser utilizado en un provider")
    }

    return contextoAutenticacion;

}

export const AutenticacionProvider = ({children}) => {

    const [Usuario, setUsuario] = useState(null)
    const [Autenticado, setAutenticado] = useState(false)
    const [Errores, setErrores] = useState([])




    const registrarDesdeAutenticacionProvider =  async (usuario) => {

        try {

            const respuestaAPI = await peticionRegistrar(usuario);
            console.log("Respuesta Api DATA ",respuestaAPI.data);   
            setUsuario(respuestaAPI.data);
            setAutenticado(true)

        } catch (error) {
            console.log("Error",error.response.data);
            setErrores(error.response.data);
        }

    }

    
    const loginDesdeAutenticacionProvider =  async (usuario) => {

        try {

            const respuestaAPI = await peticionIngresar(usuario);
            console.log("Respuesta Api DATA ",respuestaAPI.data);   
            setUsuario(respuestaAPI.data);
            setAutenticado(true)

        } catch (error) {
            console.log("Error",error.response);
            setErrores(error.response);
        }

    }





    useEffect(() => {
      async function validarCookie(){
        const cookies = Cookies.get();

        console.log("cookies",cookies)
        console.log("cookies-tokenk",cookies.token)

        if(cookies.token)
        {
            try {
                const respuesta = await verificarCookie(cookies.token)
                if(respuesta.data){
                    setAutenticado(true);
                    setUsuario(respuesta.data);
                }
            } catch (error) {
                setAutenticado(false);
                setUsuario(null);
            }
        }
       } 

       validarCookie();

    }, [])
    











    return(
        <ContextoAutenticacion.Provider 
        value={{
            registrarDesdeAutenticacionProvider,
            loginDesdeAutenticacionProvider,
            Usuario,
            Autenticado,
            Errores
        }}>
        {children}
        </ContextoAutenticacion.Provider>
    
    )
}