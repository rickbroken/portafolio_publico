import React from 'react';

const CardHabilidades = ({children}) => {
  return (
    <div className='bg-[#09181d] w-56 rounded-lg my-2 mx-4 px-2' data-aos="flip-left" data-aos-duration="1500">
      {children}
    </div>
  );
}
 
export default CardHabilidades;