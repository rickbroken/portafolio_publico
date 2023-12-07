import React from 'react';

const ContInputFormulario = ({setInput,value,label,subLabel, name, type, required,setNombres,setPhone}) => {
  return (
    <div className='w-full my-3'>
      <label htmlFor={name} className='font-[200]'>{label}{required && ' *'}
      <span className='text-sm text-[#858282]'>{subLabel}</span></label>
      {name === 'message' ?
        <textarea 
          className='w-full py-2 pl-4 outline-none font-[200] max-h-48 min-h-[110px] rounded-md' 
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e)=>setInput(e.target.value)}
        ></textarea>
      :
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e)=>setInput(e.target.value,name,setNombres,setPhone)}
          required
        />
      }
    </div>
  );
}
 
export default ContInputFormulario;