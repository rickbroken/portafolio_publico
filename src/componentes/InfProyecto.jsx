import React from 'react';
import { Icon } from '@iconify/react';
import ContenedorRedesSocialesPerfil from '../elementos/header/ContenedorRedesSocialesPerfil';


const InfProyecto = ({setMostratVentana,titulo,descripcion,caracteristicas,urlMultimedia,figma,github,linkedin,demoLive}) => {

  return (
    <div onClick={(e)=> e.target.id === 'fondoBloqueo' &&  setMostratVentana(false)} id='fondoBloqueo' className='fixed backdrop-blur-sm z-10 top-0 left-0 bg-[#f3f6f80c] w-full h-screen flex justify-center md:items-center'>
      <div className='bg-[#1d1d1d] mx-4 md:mx-0 max-w-4xl rounded-2xl relative z-20 flex flex-col items-center overflow-scroll overflow-y-auto overflow-x-auto sm:my-0  my-10 sm:mt-0 md:h-[600px] justify-between'>

        <div className='absolute top-4 right-4 cursor-pointer'>
          
          <Icon onClick={()=>setMostratVentana(false)} icon="akar-icons:cross" color="white" width="30" />
        </div>

        <div className='mx-auto text-2xl md:pt-3 pt-12 pb-3'>
          <p className='text-center'>{titulo}</p>
        </div>

        <div className='flex justify-center flex-wrap px-8'>
          <div className='md:w-[550px] w-full'>
            <p className='font-[200] py-4 text-sm'>{descripcion}</p>

            <div className='flex max-w-full min-w-full max-h-[300px] min-h-[250px] my-4 justify-center items-center rounded-md overflow-hidden'>
              <a href={linkedin !== '' && linkedin} target="_blank">
                <img className='w-full object-cover' src={urlMultimedia} />
              </a>
            </div>
          </div>

          <div className='md:w-[260px] w-full mx-w-4/12 flex flex-col items-start sm:pt-6 pb-6 sm:pb-0 px-8'>
            <p>Caracteristicas</p>
            <ul className='font-[200] text-[#adacac] list-disc max-w-full leading-7'>
              {caracteristicas.map((caracteristica)=><li>{caracteristica}</li>)}
            </ul>
          </div>
        </div>

        <div className='flex w-11/12 mx-auto justify-center items-center flex-wrap py-2 pb-4 md:pb-2'>
          <a href={demoLive} target='_blank' className='w-4/12 md:mb-0 mb-4'>
            <button className='bg-[#1e9480] py-2 w-full rounded-md'>Visitar Proyecto</button>
          </a>
          <div className='flex mx-4 flex-wrap justify-center'>
            <p className='md:mx-0 md:mr-3 mx-4'>Poyecto subido en:</p>
            <div className='flex'>
              {github !== '' &&
                <ContenedorRedesSocialesPerfil 
                  icon='skill-icons:github-dark'
                  name='GitHub'
                  url={github}
                />
              }
              {linkedin !== '' &&
                <ContenedorRedesSocialesPerfil 
                  icon='devicon:linkedin'
                  name='Linkedin'
                  url={linkedin}
                />
              }
              {figma !== '' &&
                <ContenedorRedesSocialesPerfil 
                  icon='skill-icons:figma-light'
                  name='figma'
                  url={figma}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default InfProyecto;