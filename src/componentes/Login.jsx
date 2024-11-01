import React, { useEffect, useState } from 'react';
import './../App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextos/useAuth';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const redireccionar = useNavigate();
  const {usuario} = useAuth();

  useEffect(()=>{
    if(usuario !== null){
      redireccionar('/');
      return;
    }
  },[usuario])

  const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  

  const handleSubmit = async() => {
    if(!expresionRegular.test(correo)){
      alert('Ingresa un Correo valido');
      return;
    } else if(correo === '' || password === ''){
      alert('Completa todos los campos');
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, password);
        redireccionar('/');
      } catch (error) {
        switch (error.code) {
					case 'auth/wrong-password':
						alert('Contraseña incorrecta');
						break;
	
					case 'auth/user-not-found':
						alert('La cuenta ingresada, no existe :(');
						break;
	
					default:
						alert('Hubo algun error al intentar iniciar sesion :(');
						break;
				}
      }
    }
  }

  useEffect(() => {
    // Función que manejará el evento keydown
    const manejar_tecla = (evento) => {
      if (evento.key === 'Enter') {
        handleSubmit();
      }
    };

    // Agregar el listener para keydown cuando el componente se monta
    document.addEventListener('keydown', manejar_tecla);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('keydown', manejar_tecla);
    };
  }, [correo, password]);


  return (
    <div className='fondo-login h-screen w-screen flex justify-center items-center'>
      <div className='bg-[#ffffff07] w-80 backdrop-blur-sm shadow-lg flex flex-col justify-center items-center rounded-md py-6'>
        <p className='w-8/12 text-center '>Ingrese a su portafolio</p>
        <div className='w-10/12 my-2'>
          <p className='font-[200] text-md'>Correo electronico:</p>
          <input 
            className='w-full rounded-sm bg-[#0808082f] py-1 pl-3 outline-none font-[200] text-[#c2c2c2]'
            type="text"
            placeholder='Correo'
            value={correo}
            onChange={e=>setCorreo(e.target.value)}
            />
        </div>
        <div className='w-10/12 my-2'>
          <p className='font-[200] text-md'>Contraseña:</p>
          <input 
            className='w-full rounded-sm bg-[#0808082f] py-1 pl-3 outline-none font-[200] text-[#c2c2c2]'
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        </div>
        <button 
          className='bg-white text-black text-sm py-1 px-8 rounded-sm my-2 hover:bg-[#dbdbdb]'
          onClick={()=>handleSubmit()}
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
}
 
export default Login;