import { Icon } from '@iconify/react';
import React from 'react';

const PrecargaProyecto = () => {
  return (
    <div className='h-[350px] w-[350px] mb-8 bg-black rounded-md overflow-hidden flex flex-col justify-between items-center'>
      <div className='w-full h-44 animate-pulse bg-slate-600 flex justify-center items-center'>
        <Icon icon="ph:image-duotone" width='60' color="gray" />
      </div>
      <div className='w-5/12 h-5 bg-slate-600 animate-pulse rounded-md'></div>
      <div className='w-10/12'>
        <div className='w-12/12 h-4 bg-slate-600 rounded-md animate-pulse my-1'></div>
        <div className='w-10/12 h-4 bg-slate-600 rounded-md animate-pulse my-1'></div>
        <div className='w-11/12 h-4 bg-slate-600 rounded-md animate-pulse my-1'></div>
        <div className='w-9/12 h-4 bg-slate-600 rounded-md animate-pulse my-1'></div>
      </div>
      <div className='flex w-full justify-center my-3'>
        <div className='w-5/12 h-8 bg-slate-600 animate-pulse rounded-md mx-2'></div>
        <div className='w-2/12 h-8 bg-slate-600 animate-pulse rounded-md mx-2'></div>
        <div className='w-2/12 h-8 bg-slate-600 animate-pulse rounded-md mx-2'></div>
      </div>
    </div>
  );
}
 
export default PrecargaProyecto;