import { Icon } from '@iconify/react';
import React from 'react';
import uploadingLoop from '@iconify/icons-line-md/uploading-loop';

const AgregarProyecto = ({setFormularioAgregarProyecto}) => {
  return (
    <div className='w-[370px] h-[350px] bg-[#0c0c0c] mb-10 rounded-2xl overflow-hidden flex justify-center items-center flex-col cursor-pointer hover:bg-[#181818]'
      onClick={()=>setFormularioAgregarProyecto(true)}
    >
      <p className='text-3xl font-[300]'>Agregar</p>
      <Icon icon={uploadingLoop} width='80' color='white' />
    </div>
  );
}
 
export default AgregarProyecto;