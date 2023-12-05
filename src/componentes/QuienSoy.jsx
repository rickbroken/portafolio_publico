import React from 'react';
import PrecargaSonbreMi from '../elementos/sobreMi/PrecargaSobreMi';

const QuienSoy = ({perfil}) => {

  return (
    <div className='bg-[#000000] w-full rounded-sm px-10 py-4' data-aos="zoom-in-down" data-aos-duration="800">
      <p className='text-center'>QUIEN SOY</p>
      {perfil.length !== 0 ?
        <p className='font-[200]'>{perfil.length !== 0 && perfil[0].quiensoy}</p>
        :
        <PrecargaSonbreMi />
      }
    </div>
  );
}
 
export default QuienSoy;