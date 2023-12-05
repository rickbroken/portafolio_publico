import React from 'react';
import { format } from 'date-fns';


const Footer = () => {
	const yearAtual = format(new Date(), 'yyyy');

  return (
		<div className='w-full bg-black h-24 flex justify-center items-center'>
			<p><span className='font-[100]'>Copyright - </span>Ricardo Quebrada · <span className='font-[100]'>RickBroken.com - {yearAtual}</span></p>
		</div>
	);
}
 
export default Footer;