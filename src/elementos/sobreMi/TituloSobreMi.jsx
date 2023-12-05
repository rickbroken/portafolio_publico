import { Icon } from '@iconify/react';
import React from 'react';

const TituloSobreMi = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-center mt-12 mb-2 text-xl' data-aos="zoom-out">HABILIDADES</p>
      <Icon icon="line-md:chevron-down" width='35' className='mr-1 animate-bounce'/>
    </div>
  );
}
 
export default TituloSobreMi;