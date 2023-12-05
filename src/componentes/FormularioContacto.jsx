import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FormularioContacto = () => {

  const [nombres, setNombres] = useState();
  const [correo, setCorreo] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();

  return (
    <div className='w-96 bg-[#09181d] px-8 flex flex-col items-center my-6' data-aos="zoom-out-right" data-aos-duration="2000">
      <p className='mt-6'>Contactame:</p>
      <div className='w-full my-3'>
        <p className='font-[200]'>Nombres:</p>
        <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={nombres} onChange={(e)=>setNombres(e.target.value)} />
      </div>
      <div className='w-full my-3'>
        <p className='font-[200]'>Correo electronico:</p>
        <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
      </div>
      <div className='w-full my-3'>
        <p className='font-[200]'>Telefono: <span className='text-sm text-[#858282]'>(Con indicativo)</span></p>
        <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
      </div>
      <div className='w-full my-3'>
        <p className='font-[200]'>Mensaje: <span className='text-sm text-[#858282]'>(Opcional)</span></p>
        <textarea className='w-full py-2 pl-4 outline-none font-[200] max-h-48 min-h-[110px] rounded-md' type="text" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>
      </div>
      <button className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center'>
				<Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
				Enviar
			</button>
    </div>
  );
}
 
export default FormularioContacto;