import { Icon } from '@iconify/react';
import React from 'react';

const BtnAgregarFrontend = ({setAgregandoFrontend}) => {
  return (
    <div 
      className='flex justify-center bg-slate-500 rounded-md py-3 cursor-pointer hover:bg-slate-600'
      onClick={()=>{setAgregandoFrontend(true)}}
    >
      <Icon icon="carbon:add-alt" color="white" width="25" />
      <p className='mx-2'>Agregar</p>
    </div>
  );
}
 
export default BtnAgregarFrontend;