import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import { usarContextoAutenticacion } from '../contexto/ContextoAutenticacion';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function PaginaRegistrarse() {

  const { register , handleSubmit , formState:{errors}} = useForm();
  const { registrarDesdeAutenticacionProvider, Autenticado ,  Errores : ErroresRegistrarse} = usarContextoAutenticacion();
  const NavegarHacia = useNavigate();

  console.log(Autenticado);

  useEffect(() => {
  
    if(Autenticado){ NavegarHacia("/dashboard");}

  }, [Autenticado])
  

  const manejarEnvio = handleSubmit( async (values) => {
    registrarDesdeAutenticacionProvider(values);
})
  return (

    <Form onSubmit={manejarEnvio}>

    
   
      <p className='bg-danger'>{ErroresRegistrarse}</p>
    
      

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" {...register('nombre', {required:true} )} />
        {errors.nombre && (<p className="bg-danger text-white"> Nombre Requerido</p>)}
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Roles</Form.Label>
        <Form.Control type="text" {...register('roles', {required:false} )} />
      </Form.Group>

      <Button as="input" type="submit" value="Registrar" />
      
    </Form>
  )
}

export default PaginaRegistrarse