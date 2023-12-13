import React from 'react';
import { Helmet } from 'react-helmet';
import NuevaPublicacion from './NuevaPublicacion';
import Publicacion from './Publicacion';
import useObtenerPublicaciones from './../hooks/useObtenerPublicaciones';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import CargandoPublicacion from '../elementos/cargandoPublicacion';
import SinPublicaciones from './../elementos/SinPublicaciones';
import { useAuth } from '../contextos/useAuth';
import useObtenerPerfil from '../hooks/useObtenerPerfil';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';



const Home = () => {
  const {publicaciones, existenPublicaciones} = useObtenerPublicaciones();
  const {usuario} = useAuth();
  const {perfil} = useObtenerPerfil();
  const location = useLocation();
  
  const formatearFechaUnix = (fecha) => {
    return format(fromUnixTime(fecha), "dd MMM 'de' yyyy - hh:mm aa", {locale: es})
  }

  publicaciones.map(data=>location.hash === data.id && console.log(data.id));

  return ( 
	<div className='w-full'>
    <Helmet>
      <title>RickBroken</title>
    </Helmet> 
    {usuario !== null && <NuevaPublicacion />}
    {publicaciones.length === 0 && existenPublicaciones === undefined &&
      <CargandoPublicacion />
    }

    {existenPublicaciones === false &&
      <SinPublicaciones />
    }

    {existenPublicaciones &&
      publicaciones.map((data, i)=>(
        location.hash === '' ?
        <Publicacion
          publicaciones={publicaciones}
          nameMuntimedia={data.nameMuntimedia}
          key={i++}
          ImagenPerfil={perfil[0].urlImagenPerfil}
          fecha={formatearFechaUnix(data.fecha)}
          texto={data.texto}
          id={data.id}
          urlMultimedia={data.urlMultimedia}
          tipoMultimedia={data.tipoMultimedia}
          editado={data.editado}
          idUsuario={usuario?.uid}
          formatoMovil={data.formatoMovil}
        />
        :
        location.hash.substring(1) === data.id &&
        <>
          <div className='flex flex-col items-center mt-4'>
            <p className='text-center text-xl font-[200]'>Publicacion encontrada</p>
            <Icon icon="line-md:chevron-down" width='35' className='mr-1 animate-bounce'/>
          </div>
          
          <Publicacion
            publicaciones={publicaciones}
            key={i++}
            ImagenPerfil={perfil[0].urlImagenPerfil}
            fecha={formatearFechaUnix(data.fecha)}
            texto={data.texto}
            id={data.id}
            urlMultimedia={data.urlMultimedia}
            tipoMultimedia={data.tipoMultimedia}
            editado={data.editado}
            idUsuario={usuario?.uid}
            formatoMovil={data.formatoMovil}
          />
        </>
      ))}

	</div>
  );
}
 
export default Home;