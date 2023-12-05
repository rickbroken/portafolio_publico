import { Icon } from '@iconify/react';
import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';


const CerrarSesion = () => {

  const cerrarSesion = async() => {
    try {
        await signOut(auth);
        navigate('/login');
    } catch (error) {
        console.log('Error al intentar cerrar sesion');
    }
  }

  return (
    <button onClick={()=>cerrarSesion()} className='bg-[#9c3b4b] hover:bg-[#852635] active:bg-[#77222e] w-36 py-1 text-sm rounded-md flex justify-center items-center font-[200]'>
      <Icon icon="majesticons:door-exit-line" width='18' className='mr-1'/>Cerrar Sesion
    </button>
  );
}
 
export default CerrarSesion;