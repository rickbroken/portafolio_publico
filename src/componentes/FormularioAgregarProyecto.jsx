import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import IcoClose from './../imagenes/close-fill.svg';
import agregarProyecto from './../firebase/agregarProyecto';
import { useAuth } from '../contextos/useAuth';
import InputFile from './InputFile';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';

const FormularioAgregarProyecto = ({setFormularioAgregarProyecto}) => {
  const {usuario} = useAuth();
  const [publicando, setPublicando] = useState(false);

  const [titulo, setTitulo] = useState();
  const [descripcion, setDescripcion] = useState('');
  const [caracteristicas, setCaracteristicas] = useState();
  const [listaCaracteristicas, setListaCaracteristicas] = useState([]);

  const [urlDemo, setUrlDemo] = useState('');
  const [urlLinkedin, setUrlLinkedin] = useState('');
  const [urlGitHub, setUrlGitHub] = useState('');
  const [urlFigma, setUrlFigma] = useState('');



  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if(caracteristicas !== ''){
        const nuevaLista = [...listaCaracteristicas, caracteristicas]
        setListaCaracteristicas(nuevaLista);
        setCaracteristicas('');
      }
    }
  };
  
  const eliminarCaracteristica = (e) =>{
    const nuevaLista = listaCaracteristicas.filter(caracteristica => caracteristica !== e.target.id);
    setListaCaracteristicas(nuevaLista);
  }

  
  const [fileImagenPrev, setFileImagenPrev] = useState();
  const [fileImagen, setFileImagen] = useState();
  let urlMultimediaPrev = '';
  let urlMultimedia = '';
  
  const handleFilePrev = (e,) => {
    setFileImagenPrev(e.target.files[0]);
  }
  const handleFile = (e) => {
    setFileImagen(e.target.files[0]);
  }

  const handleSubmit = async() =>{
    setPublicando(true);
    if(fileImagenPrev !== undefined && fileImagen !== undefined){
      //Subir la imagen Minuatura a firebase
      const refImagenPrev = ref(storage, `Proyectos/${fileImagenPrev.name}`);
      await uploadBytes(refImagenPrev,fileImagenPrev);
      urlMultimediaPrev = await getDownloadURL(refImagenPrev);

      //Subir la imagen Principal a Firebase
      const refImagen = ref(storage, `Proyectos/${fileImagen.name}`);
      await uploadBytes(refImagen,fileImagen);
      urlMultimedia = await getDownloadURL(refImagen);
    } else {
      alert('Debe cargar imagenes en su proyecto >:(');
      return;
    }

    await agregarProyecto(usuario.uid,titulo,descripcion,listaCaracteristicas,urlDemo,urlFigma,urlGitHub,urlLinkedin,urlMultimediaPrev,urlMultimedia);
    setFormularioAgregarProyecto(false);
    setPublicando(false);
  }
  

  return (
    <div className='flex justify-center fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-[#00000031] z-10'>
      <div className='bg-[rgb(37,37,37)] max-w-3xl w-full rounded-2xl relative z-20 flex flex-col items-center overflow-scroll overflow-y-auto overflow-x-auto my-10 max-h-[820px]'>
        <div className='absolute right-3 top-2' onClick={()=>setFormularioAgregarProyecto(false)}>
          <Icon className='cursor-pointer' width='30' color='#b8b8b8' icon="ic:round-close" />
        </div>

        <div className='w-[90%]'>
          <p className='my-6 text-center '>Agregar un Proyecto</p>
          <div className='w-full my-3'>
            <p className='font-[200]'>Titulo del Proyecto:</p>
            <input className='w-full py-2 pl-4 outline-none font-[200]' type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)} />
          </div>

          <div className='w-full my-3'>
            <p className='font-[200]'>Descripcion del proyecto:</p>
            <textarea maxLength='420' className='w-full py-2 pl-4 outline-none font-[200] min-h-[160px] max-h-52' type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}></textarea>
          </div>

          <div className='w-full my-3'>
            <p>Caracteristicas de proyectos:</p>
            <input 
              className='w-full py-2 pl-4 outline-none font-[200]' 
              type="text" 
              value={caracteristicas} onChange={(e)=>setCaracteristicas(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <div className='h-48 bg-[#70707029] mt-2 rounded-sm flex p-2 flex-wrap content-start overflow-hidden overflow-y-auto'>
              {listaCaracteristicas.map((caracteristica)=>
                <span
                  className='bg-[#767171] flex justify-between items-center py-2 h-10 px-2 rounded-sm my-2 mx-2 select-none'
                >
                  {caracteristica}
                <img 
                  onClick={(e)=>eliminarCaracteristica(e)}
                  id={caracteristica}
                  src={IcoClose}
                  className='cursor-pointer ml-2 z-10' width='22' />
                </span>
              )}
            </div>
          </div>
          
          <div className='flex my-3'>
            <div className='w-1/2 mr-1'>
              <p className='font-[200]'>URl DEMO Live:</p>
              <input className='w-full py-2 pl-4 outline-none font-[200] max-h-52' type="text" value={urlDemo} onChange={(e)=>setUrlDemo(e.target.value)}/>
            </div>
            <div className='w-1/2'>
              <p className='font-[200]'>URL Linkedind:</p>
              <input className='w-full py-2 pl-4 outline-none font-[200] max-h-52' type="text" value={urlLinkedin} onChange={(e)=>setUrlLinkedin(e.target.value)}/>
            </div>
          </div>
          <div className='flex my-3'>
            <div className='w-1/2 mr-1'>
              <p className='font-[200]'>URL GitHub:</p>
              <input className='w-full py-2 pl-4 outline-none font-[200] max-h-52' type="text" value={urlGitHub} onChange={(e)=>setUrlGitHub(e.target.value)}/>
            </div>
            <div className='w-1/2'>
              <p className='font-[200]'>URL Figma:</p>
              <input className='w-full py-2 pl-4 outline-none font-[200] max-h-52' type="text" value={urlFigma} onChange={(e)=>setUrlFigma(e.target.value)}/>
            </div>
          </div>
          
          <div className='flex'>
            <InputFile 
              name={fileImagenPrev?.name}
              titulo='Miniatura'
              handle={handleFilePrev}
              setFile={setFileImagenPrev}
              fileImg={fileImagenPrev}
            />
            <InputFile 
              name={fileImagen?.name}
              titulo='Multimedia'
              handle={handleFile}
              setFile={setFileImagen}
              fileImg={fileImagen}
            />
          </div>

          <div className='w-full flex justify-center my-5'>
            <button 
              disabled={publicando}  
              onClick={()=>handleSubmit()} 
              className={`${publicando ? 'bg-[#2071b4] hover:none active:none' : 'bg-[#2071b4] hover:bg-[#185a91] active:bg-[#14456d]'}  py-2 px-16 rounded-md flex justify-center items-center`}>
            {publicando ? <Icon icon="line-md:loading-loop" color="white" width='28' className='mr-1'/> : <><Icon icon="mingcute:send-fill" width='22' className='mr-1'/>Publicar</>}
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}
 
export default FormularioAgregarProyecto;