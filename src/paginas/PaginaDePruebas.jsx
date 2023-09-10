import React ,{useState} from 'react'
import { ref , uploadBytesResumable , getDownloadURL} from "firebase/storage";
import { storage } from "../firebase/firebaseConfig.js";

function PaginaDePruebas() {

    const [Archivo, setArchivo] = useState(null)
    const [NombreArchivo, setNombreArchivo] = useState(null)


    const manejarEnvio = async (e) =>
    {
        e.preventDefault();
        if(Archivo === null) return;
        const ubicacionArchivo = ref(storage ,  `videos/${Archivo.name}`);
        const guardarArchivo = uploadBytesResumable(ubicacionArchivo , Archivo);

        guardarArchivo.on('state_changed' , (snapshot) => {
            let progreso = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progreso);
        },(error)=>{
            console.log("Error al subir el archivo")

        },()=>{
            console.log("archivo subido");
            getDownloadURL(guardarArchivo.snapshot.ref).then(urlAlmacenada =>{
                console.log(urlAlmacenada);
            });
        });
    }
    // const manejarEnvio = async (e) =>
    // {
    //     console.log("enviando datos")
    //     console.log(NombreArchivo)
    //     e.preventDefault();
    //     try {
    //         const resultado = await subirArchivo(Archivo);
    //         if(resultado)console.log("subio")
            
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // }
  return (
    <div>
        <form onSubmit={manejarEnvio}>
         <input type="file" accept="video/*" onChange={e =>{setArchivo(e.target.files[0])}}/> <br />
         <input type="text" onChange={e =>{setNombreArchivo(e.target.value)}}/>

            <button type='submit'>
                Enviar
            </button>
        </form>
    </div>
  )
}

export default PaginaDePruebas