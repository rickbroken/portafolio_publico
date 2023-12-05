import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import '../index.css'
import Alerta from './Alerta';
import agregarPublicacion from '../firebase/agregarPublicacion';
import { useAuth } from '../contextos/useAuth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';

const NuevaPublicacion = () => {
  const {usuario} = useAuth();
  
	const [textoPublicacion, setTextoPublicacion] = useState('');
  const [publicando, setPublicando] = useState(false);

  //Definimos si la publicacion es de formato movil
  const [formatoMovil, setFormatoMovil] = useState(false);

	//Estados para definir el valor y el tipo de alerta al enviar una publicacion
	const [mostrarAlerta, setMostrarAlerta] = useState(false);
	const [valueAlerta, setValueAlerta] = useState('');
	const [typeAlerta, setTypeAlerta] = useState('');

  const [fileImagen, setFileImagen] = useState();
  let urlMultimedia = '';

  const handleFile = (e) => {
    setFileImagen(e.target.files[0]);
  }
  
	const handleSubmit = async () => {
    setPublicando(true);
    //validamos si la publicacion tiene texto para pulicar
		if(textoPublicacion === ''){
      setMostrarAlerta(true);
			setValueAlerta('Ingrese texto para publicar }:(');
			setTypeAlerta('error');
      setPublicando(false);
			setTimeout(() => {
        setMostrarAlerta(false);
			}, 2500);
		} else {
      if(fileImagen !== undefined){
        //Subir la imagen a firestorage
        const refImagen = ref(storage, `publicaciones/${fileImagen.name}`);
        await uploadBytes(refImagen,fileImagen);
        urlMultimedia = await getDownloadURL(refImagen);
      }
      
      //Subir texto

      if(fileImagen !== undefined){
        await agregarPublicacion(textoPublicacion,urlMultimedia,fileImagen.type,formatoMovil, usuario.uid)
      } else {
        await agregarPublicacion(textoPublicacion,urlMultimedia,'',formatoMovil,usuario.uid);
      }

      //Reseteamos el loading y campos de texto
      setTextoPublicacion('');
      setFormatoMovil(false);
      setPublicando(false);
      setFileImagen();
      //Mostramos alerta de exito
			setMostrarAlerta(true);
			setValueAlerta('Tu publicacion esta en linea :)');
			setTypeAlerta('exito');
      //Quitamos la alerta
			setTimeout(() => {
				setMostrarAlerta(false);
			}, 2500);
		}
	}


  return (
		<div className='cont-nueva-publicacion w-full flex flex-col items-start bg-[#0000008f] rounded-xl'>
			{mostrarAlerta &&
				<Alerta 
					value={valueAlerta}
					type={typeAlerta}
				/>
			}
			<p className='font-primaria font-[400] text-neutral-300 px-5 py-2'>Nueva Publicacion:</p>

			<textarea onChange={(e)=>setTextoPublicacion(e.target.value)} className='font-primaria font-[200] tracking-wider mx-auto w-[95%] px-2 py-1 rounded-md min-h-[100px] max-h-[200px] outline-none' placeholder='Escribe el contenido de tu post...' value={textoPublicacion}></textarea>
			
			<div className='flex justify-between items-center w-full sm:px-5 px-3 py-3'>
				<div className='flex flex-wrap items-center'>
          <div className="relative overflow-hidden mr-2">
            <input 
              type="file"
              accept=".png, .jpg, .jpeg, .mp4"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer file:cursor-pointer"
              onChange={handleFile}
            />
            <button className="bg-[#1e6994] hover:bg-[#1a5c83] active:bg-[#135074] w-full px-4 h-10 rounded-md flex justify-center items-center font-[200] text-sm max-w-[170px] truncate">
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
          <div className='flex items-center mx-0 my-2'>
            <label htmlFor="formatoMovil" className='font-[200] cursor-pointer select-none'>Formato Movil:</label>
            <input className='mx-2 h-5 w-5 cursor-pointer' type="checkbox" id="formatoMovil" checked={formatoMovil} onChange={e=>setFormatoMovil(e.target.checked)}/>
          </div>
				</div>

				<button disabled={publicando}  onClick={handleSubmit} className={`${publicando ? 'bg-[#20b47b67] hover:none active:none' : 'bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044]'}  w-40 h-10 rounded-md flex justify-center items-center`}>
					
					{publicando ? <Icon icon="line-md:loading-loop" color="white" width='28' className='mr-1'/> : <><Icon icon="mingcute:send-fill" width='22' className='mr-1'/>Publicar</>}
				</button>
			</div>

		</div>
	);
}
 
export default NuevaPublicacion;