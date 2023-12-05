import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Proyecto from './Proyecto';
import AgregarProyecto from '../elementos/AgregarProyecto';
import FormularioAgregarProyecto from './FormularioAgregarProyecto';
import useObtenerProyectos from '../hooks/useObtenerProyectos';
import PrecargaProyecto from '../elementos/PrecargaProyecto';
import { useAuth } from '../contextos/useAuth';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Proyectos = () => {
  const {usuario} = useAuth();
  const [formularioAgregarProyecto, setFormularioAgregarProyecto] = useState(false);
  const {proyectos} = useObtenerProyectos();
  const location = useLocation();

  const [resultadoProyecto, setResultadoProyecto] = useState(false);

  useEffect(()=>{
    if(location.hash !== ''){
      setResultadoProyecto(true);
    } else {
      setResultadoProyecto(false);
    }
  },[resultadoProyecto, location.hash])

  return ( 
  	<div className={`flex ${resultadoProyecto ? 'flex-col items-center' : 'flex-wrap items-start'} md:justify-between justify-center w-full py-4`}>
      <Helmet>
        <title>Poyectos</title>
      </Helmet>

      {formularioAgregarProyecto &&
        <FormularioAgregarProyecto 
          setFormularioAgregarProyecto={setFormularioAgregarProyecto}
        />
      }

      {usuario !== null && <AgregarProyecto setFormularioAgregarProyecto={setFormularioAgregarProyecto}/>}

      {location.hash.substring(1) !== '' && proyectos.length === 0 ?
          <PrecargaProyecto />
        :
        proyectos.length === 0 ?
        <>
          <PrecargaProyecto />
          <PrecargaProyecto />
          <PrecargaProyecto />
          <PrecargaProyecto />
        </>
        :
        proyectos?.map((data)=>(
          location.hash.substring(1) === '' ?
          <Proyecto
            idDoc={data.id}
            titulo={data.titulo}
            descripcion={data.descripcion}
            caracteristicas={data.caracteristicas}
            demoLive={data.demoLive}
            figma={data.figma}
            github={data.github}
            linkedin={data.linkedin}
            urlMultimediaPrev={data.urlMultiPrev}
            urlMultimedia={data.urlMultimedia}
          />
          :
          location.hash.substring(1) === data.id &&
          <>
            <div className='flex flex-col items-center mt-4'>
              <p className='text-center text-xl font-[200]'>Proyecto encontrado</p>
              <Icon icon="line-md:chevron-down" width='35' className='mr-1 animate-bounce'/>
            </div>
            <Proyecto
              idDoc={data.id}
              titulo={data.titulo}
              descripcion={data.descripcion}
              caracteristicas={data.caracteristicas}
              demoLive={data.demoLive}
              figma={data.figma}
              github={data.github}
              linkedin={data.linkedin}
              urlMultimediaPrev={data.urlMultiPrev}
              urlMultimedia={data.urlMultimedia}
            />
          </>
      ))
      }

  	</div>
  );
}

export default Proyectos;