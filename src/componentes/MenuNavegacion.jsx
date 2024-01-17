import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuNavegacion = () => {
	const location = useLocation();
	const [linkActivo, setLinkActivo] = useState('');

	useEffect(()=>{
		if(location.pathname === '/'){
			setLinkActivo('/');
		} else if(location.pathname === '/proyectos'){
			setLinkActivo('/proyectos');
		} else if(location.pathname === '/sobremi'){
			setLinkActivo('/sobremi');
		}
	},[location,linkActivo])

  return (
    <div className='flex w-full mx-auto bg-[#1c264288] justify-between rounded-tl-2xl rounded-tr-2xl sm:mt-12 sm:mb-8'>
  		<Link 
				className={`
					transition duration-100 ease-in-out py-3 
					hover:bg-black active:bg-[#192d42] w-4/12 
					rounded-tl-2xl 
					text-center border-r-[1px] border-r-[#4d4c4c]
					${linkActivo === '/' && 'bg-black'}`
				} 
				to={'/'}
			>
  		  Publicaciones
  		</Link>

  		<Link
				id='/proyectos'
				className={`
					transition duration-100 ease-in-out py-3 
					hover:bg-black active:bg-[#06121f]  w-4/12 
					text-center border-r-[1px] border-r-[#4d4c4c]
					${linkActivo === '/proyectos' && 'bg-black'}`
				} 
				to={'/proyectos'}
			>
  		  Proyectos
  		</Link>

  		<Link
				id='/sobremi'
				className={`
					transition duration-100 ease-in-out py-3 
					hover:bg-black active:bg-[#06121f] rounded-tr-2xl 
					w-4/12 text-center 
					${linkActivo === '/sobremi' && 'bg-black'}`
				}
				to={'/sobremi'}
			>
  		  Sobre Mi
  		</Link>
  	</div>
  );
}
 
export default MenuNavegacion;