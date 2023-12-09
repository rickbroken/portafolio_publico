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
import BtnAgregarFrontend from '../elementos/sobreMi/botones/BtnAgregarFrontend';
import BtnAgregarHerramientas from '../elementos/sobreMi/botones/BtnAgregarHerramientas';
import BtnAgregarBackend from '../elementos/sobreMi/botones/BtnAgregarBackend';
import FormularioTest from './FormularioTest';

const SobreMi = () => {
  const [agregandoHerramienta, setAgregandoHerramienta] = useState(false);
  const [agregandoFrontend, setAgregandoFrontend] = useState(false);
  const [agregandoBackend, setAgregandoBackend] = useState(false);
  const {perfil} = useObtenerPerfil();

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


  
  const [herramientas, setHerramientas] = useState([]);
  const [frondtend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  useEffect(()=>{
    setHerramientas(perfil[0]?.herramientas);
    setFrontend(perfil[0]?.frontend);
    setBackend(perfil[0]?.backend);
  },[perfil])

 

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

      <FormularioTest/>
  	</>
  );
}
 
export default SobreMi;