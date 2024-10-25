import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import agredarInteraccion from '../firebase/agregarInteraccion';

const Interactuar = ({icon,cantidad,id,tipo,publicaciones,mencanta,megusta}) => {
  const [interaccionLocalStorage, setInteracionLocalStorage] = useState(false);

  useEffect(()=>{
    const reaccion = localStorage.getItem('reaccion'+tipo+id);
    reaccion ? setInteracionLocalStorage(true) : setInteracionLocalStorage(false);
  },[publicaciones])

  const handle_click = async() => {
    if(!interaccionLocalStorage){
      setInteracionLocalStorage(true);
      localStorage.setItem('reaccion'+tipo+id, 'true');
      if(tipo === 'megusta'){
        await agredarInteraccion(id,tipo,megusta+1);
      } else if(tipo === 'mencanta'){
        await agredarInteraccion(id,tipo,mencanta+1);
      }
    }
  }

  return (
    <div className='flex justify-center items-center mx-3'>
			<Icon
        onClick={()=>{handle_click()}} className={!interaccionLocalStorage && 'cursor-pointer select-none'} 
        color={'#fff'} 
        width='23' 
        icon={icon}
      />
			<p className='text-lg ml-1 font-[100]'>{cantidad}</p>
		</div>
  );
}
 
export default Interactuar;