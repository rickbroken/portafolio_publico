import React from 'react';
import { Icon } from '@iconify/react';

const ContenedorRedesSocialesPerfil = ({icon,name,url}) => {
  return (
		<a href={url} target='_blank' className='flex mr-5 items-center cursor-pointer'>
			<Icon className='mr-1' icon={icon} width='23' color='#fff'/>
			<p className='font-primaria font-[200]'>{name}</p>
		</a>
	);
}
 
export default ContenedorRedesSocialesPerfil;