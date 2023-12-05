import { Icon } from '@iconify/react';
import React from 'react';

const SinPublicaciones = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-96'>
      <Icon icon="carbon:no-image" width='60' color="#b6b5b5" />
      <p className='text-[#b6b5b5]'>No tienes Publicaciones :'(</p>
    </div>
  );
}
 
export default SinPublicaciones;