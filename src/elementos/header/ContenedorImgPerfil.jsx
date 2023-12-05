import React from 'react';

const ContenedorImgPerfil = ({children}) => {
  return (
		 <div className='relative overflow-hidden rounded-full flex justify-center items-center max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px] sm:min-w-[188px] sm:min-h-[188px] sm:justify-center sm:top-[-20px]'>
			{children}
		 </div>
  );
}
 
export default ContenedorImgPerfil;