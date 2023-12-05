import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useObtenerPerfil from '../hooks/useObtenerPerfil';
import ContenedorHabilidades from '../elementos/sobreMi/ContenedorHabilidades';
import AgregarHerramienta from '../elementos/sobreMi/AgregarHerramienta';
import { v4 as uuidv4 } from 'uuid';
import AgregarFrontend from '../elementos/sobreMi/AgregarFrontend';
import AgregarBackend from '../elementos/sobreMi/AgregarBackend';
import { useAuth } from '../contextos/useAuth';
import BtnGuardarFrontend from '../elementos/sobreMi/botones/BtnGuardarFrontend';
import BtnGuardarHerramientas from '../elementos/sobreMi/botones/BtnGuardarHerramientas';
import BtnGuardarBackend from '../elementos/sobreMi/botones/BtnGuardarBackend';
import TituloSobreMi from '../elementos/sobreMi/TituloSobreMi';
import QuienSoy from './QuienSoy';
import CardHabilidades from '../elementos/sobreMi/CardHabilidades';
import FormularioContacto from './FormularioContacto';
import BtnAgregarFrontend from '../elementos/sobreMi/botones/BtnAgregarFrontend';
import BtnAgregarHerramientas from '../elementos/sobreMi/botones/BtnAgregarHerramientas';
import BtnAgregarBackend from '../elementos/sobreMi/botones/BtnAgregarBackend';
import FormularioTest from './FormularioTest';

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
  const [frondtend, setFrontend] = useState([
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
        <meta name="description" content={perfil.length !== 0 && perfil[0].quiensoy} />
      </Helmet>

      <QuienSoy perfil={perfil}/>

      <TituloSobreMi />

      <div className='w-full flex justify-center flex-wrap'>
        <CardHabilidades>
          <p className='text-center my-4'>Frontend</p>
          <div className='w-full flex flex-col justify-center my-4'>
            {frondtend?.map((dato)=>(
              <ContenedorHabilidades
                key={dato.id}
                text={dato.habilidad}
                icon={dato.icon}
                id={dato.id}
                setHabilidad={setFrontend}
                habilidad={frondtend}
                setCambio={setCambioFrontend}
              />
            ))}
            {agregandoFrontend &&
              <AgregarFrontend 
                frontend={frondtend}
                setFrontend={setFrontend}
                setAgregandoFrontend={setAgregandoFrontend}
                setCambio={setCambioFrontend}
              />
            }
            {usuario !== null && !agregandoFrontend && <BtnAgregarFrontend setAgregandoFrontend={setAgregandoFrontend} />}
            {usuario !== null && cambioFrontend && <BtnGuardarFrontend />}
          </div>
        </CardHabilidades>

        <CardHabilidades>
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
            {usuario !== null && !agregandoHerramienta && <BtnAgregarHerramientas setAgregandoHerramienta={setAgregandoHerramienta} />}
            {usuario !== null && cambioHerramientas && <BtnGuardarHerramientas />}
          </div>
        </CardHabilidades>

        <CardHabilidades>
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
            {usuario !== null && !agregandoBackend && <BtnAgregarBackend setAgregandoBackend={setAgregandoBackend}/>}
            
            {usuario !== null && cambioBackend && <BtnGuardarBackend />}
          </div>
        </CardHabilidades>
      </div>

      <FormularioContacto />
      <FormularioTest/>
  	</>
  );
}
 
export default SobreMi;