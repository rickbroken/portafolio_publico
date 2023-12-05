import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useObtenerPerfil from '../hooks/useObtenerPerfil';
import ContenedorHabilidades from '../elementos/ContenedorHabilidades';
import AgregarHerramienta from '../elementos/AgregarHerramienta';
import { v4 as uuidv4 } from 'uuid';
import AgregarFrontend from '../elementos/AgregarFrontend';
import AgregarBackend from '../elementos/AgregarBackend';
import { useAuth } from '../contextos/useAuth';

const SobreMi = () => {
  const {perfil} = useObtenerPerfil();
  const [agregandoHerramienta, setAgregandoHerramienta] = useState(false);
  const [agregandoFrontend, setAgregandoFrontend] = useState(false);
  const [agregandoBackend, setAgregandoBackend] = useState(false);

  const [cambioHerramientas, setCambioHerramientas] = useState(false);
  const [cambioFrontend, setCambioFrontend] = useState(false);
  const [cambioBackend, setCambioBackend] = useState(false);
  const {usuario} = useAuth();

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);


  const [nombres, setNombres] = useState();
  const [correo, setCorreo] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();

  const [herramientas, setHerramientas] = useState([
    {
      habilidad: "Figma",
      icon: "skill-icons:figma-light",
      id: uuidv4()
    },
    {
      habilidad: "GitHub",
      icon: "jam:github",
      id: uuidv4()
    },
    {
      habilidad: "Git",
      icon: "skill-icons:git",
      id: uuidv4()
    },
    {
      habilidad: "XAMPP",
      icon: "logos:xampp",
      id: uuidv4()
    }
  ]);
  const [frondtend, setFrondtend] = useState([
    {
      habilidad: "React JS",
      icon: "skill-icons:react-dark",
      id: uuidv4()
    },
    {
      habilidad: "HTML5",
      icon: "vscode-icons:file-type-html",
      id: uuidv4()
    },
    {
      habilidad: "CSS3",
      icon: "vscode-icons:file-type-css",
      id: uuidv4()
    },
    {
      habilidad: "SASS",
      icon: "skill-icons:sass",
      id: uuidv4()
    },
    {
      habilidad: "JavaScript",
      icon: "vscode-icons:file-type-js-official",
      id: uuidv4()
    },
    {
      habilidad: "Tailwind CSS",
      icon: "skill-icons:tailwindcss-light",
      id: uuidv4()
    },
    {
      habilidad: "Bootstrap",
      icon: "logos:bootstrap",
      id: uuidv4()
    },
    {
      habilidad: "Styled Components",
      icon: "skill-icons:styledcomponents",
      id: uuidv4()
    }
  ]);
  const [backend, setBackend] = useState([
    {
      habilidad: "PHP",
      icon: "skill-icons:php-dark",
      id: uuidv4()
    },
    {
      habilidad: "MySql",
      icon: "logos:mysql",
      id: uuidv4()
    },
    {
      habilidad: "Firebase Cloud",
      icon: "vscode-icons:file-type-light-firebasehosting",
      id: uuidv4()
    },
    {
      habilidad: "Node JS",
      icon: "skill-icons:nodejs-dark",
      id: uuidv4()
    },
    {
      habilidad: "Express",
      icon: "simple-icons:express",
      id: uuidv4()
    },
    {
      habilidad: "PostMan",
      icon: "skill-icons:postman",
      id: uuidv4()
    }
  ]);

  return ( 
  	<>
      <Helmet>
        <title>Sobre Mi</title>
      </Helmet>
      <div className='bg-[#000000] w-full rounded-sm px-10 py-4' data-aos="zoom-in-down" data-aos-duration="800">
        <p className='text-center'>QUIEN SOY</p>
        {perfil.length !== 0 ?
          <p className='font-[200]'>{perfil.length !== 0 && perfil[0].quiensoy}</p>
          :
          <>
            <div className='h-5 w-full bg-slate-600 rounded-md animate-pulse my-2'></div>
            <div className='h-5 w-10/12 bg-slate-600 rounded-md animate-pulse my-2'></div>
            <div className='h-5 w-11/12 bg-slate-600 rounded-md animate-pulse my-2'></div>
            <div className='h-5 w-11/12 bg-slate-600 rounded-md animate-pulse my-2'></div>
            <div className='h-5 w-full bg-slate-600 rounded-md animate-pulse my-2'></div>
            <div className='h-5 w-6/12 bg-slate-600 rounded-md animate-pulse my-2'></div>
          </>
        }
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-center mt-12 mb-2 text-xl' data-aos="zoom-out">HABILIDADES</p>
        <Icon icon="line-md:chevron-down" width='35' className='mr-1 animate-bounce'/>
      </div>

      <div className='w-full flex justify-center flex-wrap'>
        <div className='bg-[#09181d] w-56 rounded-lg my-2 mx-4 px-2' data-aos="flip-left" data-aos-duration="1500">
          <p className='text-center my-4'>Frontend</p>
          <div className='w-full flex flex-col justify-center my-4'>
            {frondtend?.map((dato)=>(
              <ContenedorHabilidades
                key={dato.id}
                text={dato.habilidad}
                icon={dato.icon}
                id={dato.id}
                setHabilidad={setFrondtend}
                habilidad={frondtend}
                setCambio={setCambioFrontend}
              />
            ))}
            {agregandoFrontend &&
              <AgregarFrontend 
                frontend={frondtend}
                setFrontend={setFrondtend}
                setAgregandoFrontend={setAgregandoFrontend}
                setCambio={setCambioFrontend}
              />
            }
            {usuario !== null && !agregandoFrontend &&
              <div 
                className='flex justify-center bg-slate-500 rounded-md py-3 cursor-pointer hover:bg-slate-600'
                onClick={()=>{setAgregandoFrontend(true)}}
              >
                <Icon icon="carbon:add-alt" color="white" width="25" />
                <p className='mx-2'>Agregar</p>
              </div>
            }
            {usuario !== null && cambioFrontend &&
              <div 
                className='flex justify-center bg-green-400 rounded-md my-2 py-1 cursor-pointer hover:bg-slate-600'
                onClick={()=>alert('Habilidades guardadas')}
              >
                <Icon icon="fluent:save-16-regular" color="#277043" width="25" />
                <p className='mx-2 text-[#1e723e] font-[700]'>Guardar</p>
              </div>
            }
          </div>
        </div>
        <div className='bg-[#09181d] w-56 rounded-lg my-2 mx-4' data-aos="flip-left" data-aos-duration="1900">
          <p className='text-center my-4'>Herramientas</p>
          <div className='w-full flex flex-col justify-center my-4 px-4'>
            {herramientas?.map((dato)=>(
              <ContenedorHabilidades
                key={dato.id}
                text={dato.habilidad}
                icon={dato.icon}
                id={dato.id}
                setHabilidad={setHerramientas}
                habilidad={herramientas}
                setCambio={setCambioHerramientas}
              />
            ))}
            {agregandoHerramienta &&
              <AgregarHerramienta 
                herramientas={herramientas}
                setHerramientas={setHerramientas}
                setAgregandoHerramienta={setAgregandoHerramienta}
                setCambio={setCambioHerramientas}
              />
            }
            {usuario !== null && !agregandoHerramienta &&
              <div 
                className='flex justify-center bg-slate-500 rounded-md py-3 cursor-pointer hover:bg-slate-600'
                onClick={()=>{setAgregandoHerramienta(true)}}
              >
                <Icon icon="carbon:add-alt" color="white" width="25" />
                <p className='mx-2'>Agregar</p>
              </div>
            }
            {usuario !== null && cambioHerramientas &&
              <div 
                className='flex justify-center bg-green-400 rounded-md my-2 py-1 cursor-pointer hover:bg-slate-600'
                onClick={()=>alert('Habilidades guardadas')}
              >
                <Icon icon="fluent:save-16-regular" color="#277043" width="25" />
                <p className='mx-2 text-[#1e723e] font-[700]'>Guardar</p>
              </div>
            }
          </div>
        </div>
        <div className='bg-[#09181d] w-56 rounded-lg my-2 mx-4' data-aos="flip-left" data-aos-duration="2500">
          <p className='text-center my-4'>Backend</p>
          <div className='w-full flex flex-col my-4 px-4'>
            {backend?.map((dato)=>(
              <ContenedorHabilidades
                key={dato.id}
                text={dato.habilidad}
                icon={dato.icon}
                id={dato.id}
                habilidad={backend}
                setHabilidad={setBackend}
                setCambio={setCambioBackend}
              />
            ))}
            {agregandoBackend &&
              <AgregarBackend
                backend={backend}
                setBackend={setBackend}
                setAgregandoBackend={setAgregandoBackend}
                setCambio={setCambioBackend}
              />
            }
            {usuario !== null && !agregandoBackend &&
              <div 
                className='flex justify-center bg-slate-500 rounded-md py-3 cursor-pointer hover:bg-slate-600'
                onClick={()=>{setAgregandoBackend(true)}}
              >
                <Icon icon="carbon:add-alt" color="white" width="25" />
                <p className='mx-2'>Agregar</p>
              </div>
            }
            {usuario !== null && cambioBackend &&
              <div 
                className='flex justify-center bg-green-400 rounded-md my-2 py-1 cursor-pointer hover:bg-slate-600'
                onClick={()=>alert('Habilidades guardadas')}
              >
                <Icon icon="fluent:save-16-regular" color="#277043" width="25" />
                <p className='mx-2 text-[#1e723e] font-[700]'>Guardar</p>
              </div>
            }
          </div>
        </div>
      </div>

      <div className='w-96 bg-[#09181d] px-8 flex flex-col items-center my-6' data-aos="zoom-out-right" data-aos-duration="2000">
        <p className='mt-6'>Contactame:</p>
        <div className='w-full my-3'>
          <p className='font-[200]'>Nombres:</p>
          <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={nombres} onChange={(e)=>setNombres(e.target.value)} />
        </div>
        <div className='w-full my-3'>
          <p className='font-[200]'>Correo electronico:</p>
          <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
        </div>
        <div className='w-full my-3'>
          <p className='font-[200]'>Telefono: <span className='text-sm text-[#858282]'>(Con indicativo)</span></p>
          <input className='w-full py-2 pl-4 outline-none font-[200] rounded-md' type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
        </div>
        <div className='w-full my-3'>
          <p className='font-[200]'>Mensaje: <span className='text-sm text-[#858282]'>(Opcional)</span></p>
          <textarea className='w-full py-2 pl-4 outline-none font-[200] max-h-48 min-h-[110px] rounded-md' type="text" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>
        </div>
        <button className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center'>
					<Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
					Enviar
				</button>
      </div>
  	</>
  );
}
 
export default SobreMi;