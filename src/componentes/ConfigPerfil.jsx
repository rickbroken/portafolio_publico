import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import editarConfigPerfil from './../firebase/editarConfigPerfil';

const ConfigPerfil = ({setConfig,perfil}) => {
  const [publicando, setPublicando] = useState(false);

  const [nombres, setNombres] = useState(perfil[0].nombres);
  const [apellidos, setApellidos] = useState(perfil[0].apellidos);
  const [residencia, setResidencia] = useState(perfil[0].residencia);
  const [github, setGithub] = useState(perfil[0].github);
  const [linkedin, setLinkedin] = useState(perfil[0].linkedin);
  const [instagram, setInstagram] = useState(perfil[0].instagram);
  const [figma, setFigma] = useState(perfil[0].figma);
  const [habilidades, setHabilidades] = useState(perfil[0].habilidades);
  const [quienSoy, setQuienSoy] = useState(perfil[0].quiensoy);


  const handleActualizar = async() => {
    setPublicando(true);
    await editarConfigPerfil(
      perfil[0].id,
      nombres,
      apellidos,
      figma,
      github,
      habilidades,
      instagram,
      linkedin,
      residencia,
      quienSoy
    );
    setPublicando(false);
    setConfig(false);
  }

  return (
    <div className='flex justify-center sm:items-center fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-[#00000031] z-20'>
      <div className='bg-[rgb(37,37,37)] max-w-3xl w-full sm:h-[590px] rounded-2xl  relative z-20 flex flex-col items-center overflow-scroll overflow-y-auto mt-10 sm:mt-0 sm:mx-0 mx-4 overflow-x-auto'>
        <div className='absolute right-3 top-2' onClick={()=>setConfig(false)}>
          <Icon className='cursor-pointer' width='30' color='#b8b8b8' icon="ic:round-close" />
        </div>
        <p className='text-center text-lg my-6'>Configuracion del Perfil</p>

        <div className='flex flex-col w-full'>
          <div className='sm:flex w-full items-between'>
            <div className='flex flex-col sm:w-1/2 items-center'>
              <div className='w-[92%]'>
                <p>Nombres:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={nombres} onChange={(e)=>setNombres(e.target.value)}/>
              </div>

              <div className='w-[92%]'>
                <p>Apellidos:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={apellidos} onChange={(e)=>setApellidos(e.target.value)}/>
              </div>

              <div className='w-[92%]'>
                <p>Lugar Residencia:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={residencia} onChange={(e)=>setResidencia(e.target.value)}/>
              </div>
              <div className='w-[92%]'>
                <p>Habilidades:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={habilidades} onChange={(e)=>setHabilidades(e.target.value)}/>
              </div>
            </div>

            <div className='flex flex-col sm:w-1/2 items-center'>
              <div className='w-[92%]'>
                <p>GitHub:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={github} onChange={(e)=>setGithub(e.target.value)}/>
              </div>

              <div className='w-[92%]'>
                <p>Linkedin:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={linkedin} onChange={(e)=>setLinkedin(e.target.value)}/>
              </div>

              <div className='w-[92%]'>
                <p>Youtube:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={instagram} onChange={(e)=>setInstagram(e.target.value)}/>
              </div>
              <div className='w-[92%]'>
                <p>Tiktok:</p>
                <input className='py-2 px-3 rounded-sm outline-none mb-5 w-full' type="text" value={figma} onChange={(e)=>setFigma(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className='mx-4'>
            <label>Descripcion de ti:</label>
            <textarea 
              className='w-full rounded-md px-2 py-1 max-h-[180px] min-h-[60px] outline-none' 
              placeholder='Escribe sobre ti...'
              value={quienSoy}
              onChange={(e)=>setQuienSoy(e.target.value)}
            >
            </textarea>
          </div>
        </div>

        <button disabled={publicando}  onClick={handleActualizar} className={`${publicando ? 'bg-[#20b47b67] hover:none active:none' : 'bg-[#399974] hover:bg-[#357c61] active:bg-[#207044]'}  py-2 px-16 rounded-md my-6 flex justify-center items-center`}>
					{publicando ? <Icon icon="line-md:loading-loop" color="white" width='28' className='mr-1'/> : <><Icon icon="mingcute:send-fill" width='22' className='mr-1'/>Guardar</>}
				</button>
      </div>
    </div>
  );
}
 
export default ConfigPerfil;