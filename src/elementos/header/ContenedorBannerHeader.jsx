import React from 'react';

const ContenedorBannerHeader = ({children}) => {
  return (
		<>
		<div className='w-full max-h-[201px] min-h-[201px] overflow-hidden flex items-center'>
			{children}
		</div>
		</>
	);
}
 
export default ContenedorBannerHeader;