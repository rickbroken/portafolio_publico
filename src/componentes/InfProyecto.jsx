import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ContenedorRedesSocialesPerfil from '../elementos/header/ContenedorRedesSocialesPerfil';
import  Markdown  from  'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const InfProyecto = ({setMostratVentana,titulo,descripcion,caracteristicas,urlMultimedia,figma,github,linkedin,demoLive}) => {
  const [welcome, setWelcome] = useState({
    pasoUno: false,
    pasoDos: false,
    pasoTres: false
  });

  useEffect(()=>{
    if(Boolean(localStorage.getItem('welcomeProyecto')) !== true){
      setWelcome({pasoUno: true});
      return;
    }
  },[])

  const welcomeEnd = () => {
    localStorage.setItem('welcomeProyecto', true);
    setWelcome({pasoTres: false});
  }

  return (
    <div onClick={(e)=> e.target.id === 'fondoBloqueo' &&  setMostratVentana(false)} id='fondoBloqueo' className='fixed backdrop-blur-sm z-10 top-0 left-0 bg-[#f3f6f80c] w-full h-screen flex justify-center md:items-center'>
      <div className='bg-[#1d1d1d] mx-4 md:mx-0 max-w-4xl rounded-2xl relative z-20 flex flex-col items-center overflow-scroll overflow-y-auto overflow-x-auto sm:my-0  my-10 sm:mt-0 md:h-[600px] justify-between'>
        {welcome.pasoUno || welcome.pasoDos || welcome.pasoTres && true ?
          <div className='fixed left-0 top-0 w-full h-screen bg-[#0e3747a8] z-30'></div> : false
        }

        <div className='absolute top-4 right-4 cursor-pointer'>
          <Icon onClick={()=>setMostratVentana(false)} icon="akar-icons:cross" color="white" width="30" />
        </div>

        <div className='mx-auto text-xl sm:text-2xl md:pt-3 pt-12 pb-3'>
          <p className='text-center'>{titulo}</p>
        </div>

        <div className='flex justify-center flex-wrap px-8 w-full'>
          <div className='md:w-[550px] w-full'>

            {welcome.pasoUno ?
              <div className='absolute flex flex-col items-center right-16 z-40 top-2 md:top-16 md:right-20 w-56 rounded-md bg-white'>
                <p className='text-black font-[800] pt-2'>1/3</p>
                <p className='text-black py-1 text-center px-4 font-[400]'>Puedes hacer scroll y leer el README.md del proyecto ;)</p>
                <div>
                  <button 
                    className='text-black text-sm px-2 font-[200]'
                    onClick={()=>welcomeEnd()}
                  >
                    Omitir - </button>
                  <button 
                    className='text-white bg-green-700 mt-2 py-1 px-6 rounded-full mb-1'
                    onClick={()=>setWelcome({pasoUno: false, pasoDos: true})}  
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            : welcome.pasoDos ?
              <div className='absolute flex flex-col items-center z-40 left-16 bottom-16 md:left-24 w-56 rounded-md bg-white'>
                <p className='text-black font-[800] pt-2'>2/3</p>
                <p className='text-black py-1 text-center px-4 font-[400]'>{`Puedes visitar la Demostracion <3`}</p>
                <button 
                  className='text-white bg-green-700 py-2 px-6 rounded-full mb-1'
                  onClick={()=>setWelcome({pasoDos: false, pasoTres: true})}  
                >
                  Siguiente
                </button>
              </div>
            : welcome.pasoTres &&
              <div className='absolute flex flex-col items-center z-40 right-14 bottom-4 md:bottom-16 md:right-32 w-56 rounded-md bg-white'>
                <p className='text-black font-[800] pt-2'>3/3</p>
                <p className='text-black py-1 text-center px-4 font-[400]'>{`Subido en plataformas! dale estrellita en GitHub si te gusta`}</p>
                <button 
                  className='text-white bg-green-700 py-2 px-6 rounded-full mb-1'
                  onClick={()=>welcomeEnd()}  
                >
                  {`Finalizar :)`}
                </button>
              </div>
            }

            
            <div className={`${welcome.pasoUno && 'z-30 shadow-xl shadow-[#ffffff21] '} bg-[#1d1d1d] relative max-h-[160px] bg-transparent overflow-ellipsis tracking-wide font-[200] text-sm apply-none overflow-y-auto rounded`}>
              <Icon 
                className={`${welcome.pasoUno ? 'animate-bounce ' : 'hidden'} absolute right-6 z-40 top-16`} 
                icon="ic:round-swipe-up" 
                width={60} 
                color='#ffffffe1'/>
              
              <Markdown className="overflow-ellipsis bg-[#1d1d1d] px-4 pt-2" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{descripcion}</Markdown>
            </div>

            <div className='flex max-w-full min-w-full max-h-[300px] min-h-[250px] my-4 justify-center items-center rounded-md overflow-hidden'>
              <a href={linkedin !== '' && linkedin} target="_blank">
                <img className='w-full object-cover' src={urlMultimedia} />
              </a>
            </div>
          </div>

          <div className='md:w-[260px] w-full mx-w-4/12 flex flex-col items-start sm:pt-6 pb-6 sm:pb-0 px-8'>
            <p>Caracteristicas</p>
            <ul className='font-[200] text-[#adacac] list-disc max-w-full leading-7'>
              {caracteristicas.map((caracteristica,index)=><li key={index}>{caracteristica}</li>)}
            </ul>
          </div>
        </div>

        <div className='flex w-11/12 mx-auto justify-center items-center flex-wrap py-2 pb-4 md:pb-2'>
          <a href={demoLive} target='_blank' className={`${welcome.pasoDos && 'z-30 shadow-xl shadow-[#ffffff21]'} w-4/12 md:mb-0 mb-4`}>
            <button className='bg-[#1e9480]  py-2 w-full rounded-md'>Visitar Proyecto</button>
          </a>
          <div className={`${welcome.pasoTres && 'z-30 shadow-xl'} flex mx-4 flex-wrap justify-center`}>
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