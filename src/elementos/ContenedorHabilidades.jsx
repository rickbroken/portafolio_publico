import { Icon } from '@iconify/react';
import React from 'react';
import { eliminarHabilidad } from '../funciones/eliminarHabilidad';
import { useAuth } from '../contextos/useAuth';

const ContenedorHabilidades = ({text, icon, id, habilidad, setHabilidad, setCambio}) => {
  const {usuario} = useAuth();

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <Icon className='mx-2 my-1' width='38' color='white' icon={icon} />
        <p className='font-[200]'>{text}</p>
      </div>
      {usuario !== null &&
        <Icon 
          className='cursor-pointer text-white hover:text-gray-400' 
          icon="carbon:close-outline" 
          color="" 
          width="25"
          onClick={()=>{
            setCambio(true)
            eliminarHabilidad(id,habilidad,setHabilidad)
          }}
        />
      }
    </div>
  );
}
 
export default ContenedorHabilidades;