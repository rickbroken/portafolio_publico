import { Icon } from '@iconify/react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { storage } from '../firebase/firebaseConfig';
import actualizarImagenPerfil from './../firebase/actualizarImagenPerfil';
import { useAuth } from '../contextos/useAuth';



const ImgPerfil = ({ImagenPerfil,id}) => {
  const {usuario} = useAuth();
  const [publicando, setPublicando] = useState();

  const [fileImagen, setFileImagen] = useState();
  let urlMultimedia= '';

  const handleFile = (e) => {
    setFileImagen(e.target.files[0]);
  }

  const handleSubmit = async() => {
    setPublicando(true);
    if(fileImagen !== undefined){
      //Subir la imagen a firestorage
      const refImagen = ref(storage, `perfil/${fileImagen.name}`);
      await uploadBytes(refImagen,fileImagen);
      urlMultimedia = await getDownloadURL(refImagen);
    } else {
      alert('Carga una imagen :)')
    }

    await actualizarImagenPerfil(id, urlMultimedia);

    setPublicando(false);
    setFileImagen();
  }

  return (
    <>
      {usuario !== null &&
        <div className='absolute w-full h-[100%] flex flex-col justify-center items-center bg-[#0001039d] rounded-full z-10'>
          <div className="overflow-hidden">
            <input 
              type="file"
              accept=".png, .jpg, .jpeg, .mp4"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer file:cursor-pointer"
              onChange={handleFile}
            />
            <button className="bg-[#1e6994] hover:bg-[#1b435a] active:bg-[#135074] w-full px-3 py-1 rounded-md flex justify-center items-center font-[200] text-sm max-w-[170px] truncate">
              <Icon icon="clarity:attachment-line" width='22' className='mr-1'/>
              {fileImagen !== undefined ? 
              <>
                {fileImagen.name}
                <Icon
                  icon="clarity:close-line"
                  width='25' color='white'
                  className='mx-1 z-10'
                  onClick={()=>setFileImagen()}
                />
              </>
              :
              'Multimedia'
              }
            </button>
          </div>
          {fileImagen &&
            <button disabled={publicando}  onClick={handleSubmit} className={`${publicando ? 'bg-[#20b47b67] hover:none active:none' : 'bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044]'} px-4 py-1 my-2 rounded-md flex justify-center items-center z-10`}>
              {publicando ? <Icon icon="line-md:loading-loop" color="white" width='28' className='mr-1'/> : <><Icon icon="mingcute:send-fill" width='22' className='mr-1'/>Guardar</>}
            </button>
          }
        </div>
      }
      <img className='object-cover w-full absolute  sm:relative ' src={ImagenPerfil} alt="imagenPerfil" />
    </>
  );
}
 
export default ImgPerfil;