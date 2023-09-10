import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import { usarContextoAutenticacion } from '../contexto/ContextoAutenticacion';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function PaginaLogin() {

  const { register , handleSubmit , formState:{errors}} = useForm();
  const { loginDesdeAutenticacionProvider , Autenticado ,  Errores : ErroresRegistrarse} = usarContextoAutenticacion();
  const NavegarHacia = useNavigate();

  console.log(Autenticado);

  useEffect(() => {
    //console.log("Autenticado login  ",Autenticado)
    if(Autenticado){ NavegarHacia("/dashboard");}
  }, [Autenticado])
  

  const manejarEnvio = handleSubmit( async (values) => {
    loginDesdeAutenticacionProvider(values);
})
  return (

    <Form onSubmit={manejarEnvio}>

    
      <p className='bg-danger'>{console.log(ErroresRegistrarse)}</p>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  {...register('email' , {required:true} )}/>
        {errors.email && (<p className="bg-danger text-white"> Email Requerido</p>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register('password', {required:true} )} />
        {errors.password && (<p className="bg-danger text-white"> Contraseña Requerida</p>)}
      </Form.Group>
    

      <Button as="input" type="submit" value="Registrar" />
      
    </Form>
  )
}

export default PaginaLogin