import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import useObtenerPerfil from '../hooks/useObtenerPerfil';
import actualizarPublicacion from '../firebase/actualizarPublicacion';
import eliminarPublicacion from './../firebase/eliminarPublicacion';
import Interactuar from './Interactuar';
import useObtenerInteraccion from '../hooks/useObtenerInteraccion';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';
import { useAuth } from '../contextos/useAuth';
import { copiarEnlacePublicacion } from '../funciones/copiarEnlacePublicacion';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/theme-one_dark';
import 'ace-builds/src-noconflict/mode-markdown';
import Swal from 'sweetalert2';
import { alert_error, alert_success } from '../funciones/alerts';


const Publicacion = ({ menuPublicacionMain, setMenuPublicacionMain, texto, fecha, id, editado, publicaciones, idUsuario, urlMultimedia, tipoMultimedia, formatoMovil, ImagenPerfil, nameMuntimedia }) => {
  const { usuario } = useAuth();
  const { perfil } = useObtenerPerfil();
  const [menuPublicacion, setMenuPublicacion] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(texto);
  const { interacciones } = useObtenerInteraccion();
  const [enlaceCopiado, setEnlaceCopiado] = useState(false);
  const [mostraIcono, setMostrarIcono] = useState(true);

  const [megusta, setMegusta] = useState();
  const [mencanta, setMencanta] = useState();

  const local_reaccion_mencanta = localStorage.getItem('reaccion' + 'mencanta' + id);
  const local_reaccion_megusta = localStorage.getItem('reaccion' + 'megusta' + id);


  useEffect(() => {
    if (interacciones) {
      interacciones.map((interacion) => {
        if (interacion.idDoc === id) {
          setMencanta(interacion.mencanta);
          setMegusta(interacion.megusta);
        }
      })
    }
  }, [interacciones, id]);


  //Actualizar el texto del input cuando se agrega una publicacion
  useEffect(() => {
    setNuevoTexto(texto);
  }, [publicaciones])

  const [editando, setEditando] = useState(false);
  const [publicando, setPublicando] = useState(false);


  const [fileImagen, setFileImagen] = useState();
  let urlNuevaMultimedia = '';

  const handleFile = (e) => {
    setFileImagen(e.target.files[0]);
  }


  const handleActualizar = async () => {
    if (texto === nuevoTexto && fileImagen === undefined) {
      alert_error('No se ha realizado ningun cambio');
      return;
    }
    setPublicando(true);

    if (fileImagen !== undefined) {
      //Subir la imagen a firestorage
      const refImagen = ref(storage, `publicaciones/${fileImagen.name}`);
      await uploadBytes(refImagen, fileImagen);
      urlNuevaMultimedia = await getDownloadURL(refImagen);
    }

    //Subir texto
    if (fileImagen !== undefined) {
      await actualizarPublicacion(id, nuevoTexto, urlNuevaMultimedia, fileImagen.type);
    } else {
      await actualizarPublicacion(id, nuevoTexto, false, '');
    }

    setFileImagen();
    setPublicando(false);
    setNuevoTexto(nuevoTexto);
    setEditando(false);
  }

  const onChange = (newValue) => {
    setNuevoTexto(newValue);
  }

  const compartirPublicacion = () => {
    // Se copia el enlace al portapapeles y se renderiza nuevamente el ícono
    setEnlaceCopiado(true);
    setMostrarIcono(false);

    alert_success('Enlace copiado');

    // Re-muestra el ícono después de un breve retardo
    setTimeout(() => {
      setMostrarIcono(true);
    }, 50); // Breve intervalo para forzar el re-render

    copiarEnlacePublicacion(id);

    setTimeout(() => {
      setEnlaceCopiado(false);
    }, 4000);
  }

  const eliminarPublicacionCofirmacion = () => {
    Swal.fire({
      title: "¿Seguro que desea eliminar la publicacion?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminarPublicacion(id);
        setMenuPublicacion(false);
      } else {
        setMenuPublicacion(!menuPublicacion);
        setMenuPublicacionMain(false);
      }
    });
  }

  return (
    <article id={id} className={`${formatoMovil ? 'sm:w-6/12' : 'sm:w-full'} mx-auto sm:my-8 my-2 mb-20 rounded-xl font-primaria relative bg-[#151b23]`}>
      <Icon
        onClick={() => {
          setMenuPublicacion(!menuPublicacion)
          setMenuPublicacionMain(false)
        }}
        className='absolute right-5 top-4 cursor-pointer select-none active:select-none focus:select-none'
        width='30'
        color='#b8b8b8'
        icon="solar:menu-dots-bold"
      />
      {menuPublicacion && !menuPublicacionMain &&
        <div className='bg-[#413f3f] absolute right-6 top-11 rounded-sm z-10'>
          {usuario !== null && !editando &&
            <p className='py-1 px-6 my-1 cursor-pointer font-[200] hover:bg-[#555454] select-none' onClick={() => {
              setEditando(!editando);
              setMenuPublicacion(!menuPublicacion);
            }}>
              Editar
            </p>
          }
          {usuario !== null && <p className='py-1 px-6 my-1 cursor-pointer font-[200] hover:bg-[#555454] select-none'
            onClick={() => eliminarPublicacionCofirmacion()}>
            Borrar
          </p>}
          <p className='flex py-1 px-4 my-1 cursor-pointer font-[200] hover:bg-[#555454] select-none text-sm' onClick={() => {
            compartirPublicacion();
            setMenuPublicacion(!menuPublicacion);
          }}>
            <Icon className='mr-2' icon="teenyicons:attach-solid" color="white" width="22" />
            Copiar Enlace de la Publicacion
          </p>
        </div>
      }
      <div className='flex w-11/12 items-center mx-auto pt-4 pb-2'>
        <img className='rounded-full w-12 h-12 select-none object-cover' src={ImagenPerfil} />
        <div className='mx-3'>
          <p>{perfil.length !== 0 && perfil[0].nombres + ' ' + perfil[0].apellidos}</p>
          <div className='flex items-center'>
            <p className='font-[200] mr-2 text-[0.7rem] text-[#b8b8b8]'>{fecha}</p>
            <Icon width='18' color='#b8b8b8' icon="carbon:earth-filled" />
            {editado && <p className='font-[200] text-[0.7rem] mx-1 text-[#b8b8b8]'> • Editado</p>}
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto'>
        {editando ?
          <AceEditor
            mode="markdown"
            theme="one_dark"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            defaultValue={texto}
            showPrintMargin={false}
            width='100%'
            height='20vh'
            setOptions={{
              useWorker: false,
              tabSize: 2,
              wrap: true,
              animatedScroll: true,
              cursorStyle: 'slim',
              useSoftTabs: true,
              fontSize: 16,
            }}
          />
          :
          <Markdown className="overflow-ellipsis font-[200]" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{texto}</Markdown>
        }
        {editando &&
          <div className='flex gap-4'>
            <button disabled={publicando} onClick={handleActualizar} className={`${publicando ? 'bg-[#20b47b67] hover:none active:none' : 'bg-[#399974] hover:bg-[#357c61] active:bg-[#207044]'}  py-1 px-2 font-[200] text-sm rounded my-2 flex justify-center items-center gap-1`}>
              {publicando ? <Icon icon="line-md:loading-loop" color="white" width='28' className='mr-1' />
                :
                <>
                  <Icon icon="mingcute:send-fill" />
                  Guardar
                </>
              }
            </button>
            <button disabled={publicando} onClick={() => setEditando(false)} className={'bg-[#b1343e] hover:bg-[#943a42] active:bg-[#742f34] py-1 px-2 font-[200] text-sm rounded my-2 flex justify-center items-center gap-1'}>
              <Icon icon="line-md:cancel" />
              Cancelar
            </button>
          </div>
        }
      </div>

      <div className='max-h-[700px] w-full overflow-hidden flex items-center relative'>
        {editando &&
          <div className='absolute w-full h-full flex justify-center items-center bg-[#0001039d] z-10'>
            <div className="absolute overflow-hidden mr-2">
              <input
                type="file"
                accept=".png, .jpg, .jpeg, .mp4"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer file:cursor-pointer"
                onChange={handleFile}
              />
              <button className="bg-[#1e6994] hover:bg-[#1a5c83] active:bg-[#135074] w-full px-4 h-10 rounded-md flex justify-center items-center font-[200] text-sm max-w-[170px] truncate">
                <Icon icon="clarity:attachment-line" width='22' className='mr-1' />
                {fileImagen !== undefined ?
                  <>
                    {fileImagen.name}
                    <Icon
                      icon="clarity:close-line"
                      width='25' color='white'
                      className='mx-1 z-10'
                      onClick={() => setFileImagen()}
                    />
                  </>
                  :
                  'Multimedia'
                }
              </button>
            </div>
          </div>
        }

        {tipoMultimedia === 'image/png' || tipoMultimedia === 'image/jpeg' ?
          <a href={urlMultimedia} className='w-full' target='_blanck'>
            <img className='object-cover w-full cursor-pointer aspect-video' alt={nameMuntimedia} src={urlMultimedia} />
          </a>
          : tipoMultimedia === 'video/mp4' &&
          <video controls className='w-full'>
            <source src={urlMultimedia} type='video/mp4' />
            Tu navegador no admite video HTML5.
          </video>
        }
      </div>

      <div className='flex items-center justify-between w-full py-2'>
        <div className='flex'>
          <Interactuar
            icon={local_reaccion_mencanta ? 'icon-park-solid:like' : 'icon-park-outline:like'}
            cantidad={mencanta}
            mencanta={mencanta}
            id={id}
            tipo='mencanta'
            publicaciones={publicaciones}
            idUsuario={idUsuario}
          />
          <Interactuar
            icon={local_reaccion_megusta ? 'ant-design:like-fill' : 'ant-design:like-twotone'}
            cantidad={megusta}
            megusta={megusta}
            id={id}
            tipo='megusta'
            publicaciones={publicaciones}
            idUsuario={idUsuario}
          />
        </div>

        <div className='px-4'>
          {mostraIcono && (
            <Icon
              className='cursor-pointer'
              icon={enlaceCopiado ? 'line-md:confirm-circle' : `fluent:share-28-regular`}
              color={'#fff'}
              width='23'
              onClick={compartirPublicacion}
            />
          )}
        </div>

      </div>
    </article>
  );
}

export default Publicacion;