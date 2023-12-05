import React, { useState } from 'react';
import { agregarBackend } from '../funciones/agregarBackend';

const AgregarBackend = ({setAgregandoBackend, backend, setBackend}) => {
  const [nombre, setNombre] = useState('');
  const [icono, setIcono] = useState('');

  return (
    <div className='flex flex-col items-center bg-slate-500 rounded-md py-2'>
      <p>Nombre</p>
      <input 
        type="text" 
        className='w-10/12 font-[200] py-1 rounded-sm outline-none px-2' 
        placeholder='Escriba nombre'
        value={nombre}
        onChange={e=>setNombre(e.target.value)}
      />
      <p>Nombre Icon (Iconify)</p>
      <input 
        type="text" 
        className='w-10/12 font-[200] py-1 rounded-sm outline-none px-2' 
        placeholder='Nombre Icono'
        value={icono}
        onChange={e=>setIcono(e.target.value)}
      />
      <button 
        type="submit"
        className='bg-slate-800 py-1 px-6 rounded-md hover:bg-slate-900 mt-2'
        onClick={()=>{
          setAgregandoBackend(false)
          agregarBackend(nombre,icono,backend,setBackend)
        }}
      >
          Agregar
      </button>
    </div>
  );
}
 
export default AgregarBackend;