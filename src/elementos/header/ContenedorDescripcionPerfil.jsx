import React from 'react';

const ContenedorDescripcionPerfil = ({children}) => {
  return (
    <div className='flex flex-col sm:flex-row w-full items-center relative top-[-60px] sm:top-0'>
			{children}
		</div>
  );
}
 
export default ContenedorDescripcionPerfil;