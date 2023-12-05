import { Icon } from '@iconify/react';
import React from 'react';

const BtnGuardarFrontend = () => {
  return (
    <div 
      className='flex justify-center bg-green-400 rounded-md my-2 py-1 cursor-pointer hover:bg-green-500'
      onClick={()=>alert('Habilidades guardadas')}
    >
      <Icon icon="fluent:save-16-regular" color="#277043" width="25" />
      <p className='mx-2 text-[#1e723e] font-[700]'>Guardar</p>
    </div>
  );
}
 
export default BtnGuardarFrontend;