import React from 'react';
import { Icon } from '@iconify/react';

const ContenedorAlertaFormulario = ({text,subText,icon,color,errorServer}) => {
  return (
    <div className='fixed flex flex-col rounded-md justify-center items-center px-10 bg-[#000000e1] w-full h-full'>
      {errorServer ?
        <Icon color={color} width="150" icon={icon} />
      :
        <Icon icon={icon} color={color} width="150" />
      }
      <p className='text-center my-4'>
        {text}
        <br/>
        <span className='text-gray-600 text-sm px-2'>{subText}</span>
      </p>
    </div>
  );
}
 
export default ContenedorAlertaFormulario;