import React from 'react';


const ContenedorMain = ({children}) => {
  return (
		<div className='max-w-3xl mx-auto flex flex-col px-4 sm:p-0 items-center'>
			{children}
		</div>
  );
}
 
export default ContenedorMain;