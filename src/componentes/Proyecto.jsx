import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import InfProyecto from './InfProyecto';
import ContenedorRedesSocialesPerfil from '../elementos/header/ContenedorRedesSocialesPerfil';
import FormularioEditarProyecto from './FormularioEditarProyecto';
import eliminarProyecto from './../firebase/eliminarProyecto';
import { useAuth } from '../contextos/useAuth';
import {copiarEnlaceProyecto} from '../funciones/copiarEnlaceProyecto';
import Markdown from 'react-markdown';


const Proyecto = ({titulo,descripcion,caracteristicas,figma,linkedin,github,demoLive,idDoc,urlMultimediaPrev,urlMultimedia}) => {
  const {usuario} = useAuth();
  const [mostrartVentana, setMostratVentana] = useState(false);
  const [menuProyecto, setMenuProyecto] = useState(false);
  const [formularioEditarProyecto, setFormularioEditarProyecto] = useState(false);


  return (
    <div className='w-[370px] h-[350px] mb-10 bg-[#0c0c0c] rounded-2xl overflow-hidden relative flex flex-col justify-between'>
      {mostrartVentana &&
        <InfProyecto
          setMostratVentana= {setMostratVentana}
          titulo={titulo}
          descripcion={descripcion}
          caracteristicas={caracteristicas}
          urlMultimedia={urlMultimedia}
          github={github}
          figma={figma}
          linkedin={linkedin}
          demoLive={demoLive}
        />
      }

        <div className='absolute right-0 rounded-es-lg bg-[#2c669698] hover:bg-[#2c6696de] top-0 h-8 w-10 flex justify-center items-center'>
          <Icon
            onClick={()=>setMenuProyecto(!menuProyecto)}
            className='cursor-pointer' 
            width='30' 
            color='#b8b8b8' 
            icon="solar:menu-dots-bold"
          />
        </div>
      {menuProyecto &&
        <div className='bg-[#413f3f] absolute right-1 top-8 rounded-md z-10'>
          {usuario !== null &&
          <>
            <p
              className='py-1 px-6 my-1 cursor-pointer font-[200] hover:bg-[#555454] select-none' 
              onClick={()=>{
                setMenuProyecto(!menuProyecto)
                setFormularioEditarProyecto(!formularioEditarProyecto);
              }}
            >
              Editar
            </p>
            <p 
              className='py-1 px-6 my-1 cursor-pointer font-[200] hover:bg-[#555454] select-none'
              onClick={()=>{
                setMenuProyecto(false);
                eliminarProyecto(idDoc);
              }}
            >
                Borrar
            </p>
          </>
          }
          <p
            className='py-1 px-4 my-1 flex cursor-pointer font-[200] hover:bg-[#555454] select-none' 
            onClick={()=>{
              setMenuProyecto(!menuProyecto);
              copiarEnlaceProyecto(idDoc);
            }}
          >
            <Icon className='mr-2' icon="teenyicons:attach-solid" color="white" width="25" />
            Copiar enlace del Proyecto
          </p>
        </div>
      }
      <div className='cursor-pointer' onClick={()=>setMostratVentana(true)}>
        <img className='w-full max-h-[190px] select-none object-cover' src={urlMultimediaPrev} />
      </div>
      <p className='my-1 text-center w-full'>{titulo}</p>
        <span className='eliminar-estilos-markdown font-[100] px-3 leading-5 max-h-16 text-ellipsis overflow-hidden'>
          <Markdown>
            {descripcion.replace(/<[^>]*>/g, "")}
          </Markdown>
        </span>
      <div className='flex w-11/12 mx-auto justify-between py-2 pb-4'>
        <button onClick={()=>setMostratVentana(true)} className='bg-[#1e6994] w-7/12 py-2 mx-2 rounded-md'>Ver Mas</button>
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
      </div>

      {formularioEditarProyecto &&
        <FormularioEditarProyecto
          setFormularioEditarProyecto={setFormularioEditarProyecto}
          idDoc={idDoc}
          titulo={titulo}
          descripcion={descripcion}
          caracteristicas={caracteristicas}
          github={github}
          figma={figma}
          linkedin={linkedin}
          demoLive={demoLive}
        />
      }
    </div>
  );
}
 
export default Proyecto;