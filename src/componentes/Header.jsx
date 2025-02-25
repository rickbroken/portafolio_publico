import { useState } from 'react'
import ContenedorBannerHeader from '../elementos/header/ContenedorBannerHeader'
import bannerPerfil from '../imagenes/bannerPerfil.png'
import ContenedorImgPerfil from '../elementos/header/ContenedorImgPerfil'
import ContenedorDescripcionPerfil from '../elementos/header/ContenedorDescripcionPerfil'
import ContenedorTextoPerfil from '../elementos/header/ContenedorTextosPerfil'
import ContenedorRedesSocialesPerfil from '../elementos/header/ContenedorRedesSocialesPerfil'
import { Icon } from '@iconify/react'
import ConfigPerfil from './ConfigPerfil'
import useObtenerPerfil from '../hooks/useObtenerPerfil'
import CerrarSesion from './CerrarSesion'
import ImgPerfil from './ImgPerfil'
import { useAuth } from '../contextos/useAuth'



const Header = () => {
  const [config, setConfig] = useState(false);
  const { perfil } = useObtenerPerfil();
  const { usuario } = useAuth();

  return (
    <>
      {config &&
        <ConfigPerfil setConfig={setConfig} perfil={perfil} />
      }
      <ContenedorBannerHeader>
        <img className='object-cover w-full' src={bannerPerfil} alt="bannerPerfil" />
      </ContenedorBannerHeader>

      <ContenedorDescripcionPerfil>

        <ContenedorImgPerfil>
          {perfil.length !== 0 ?
            <ImgPerfil ImagenPerfil={perfil[0]?.urlImagenPerfil} id={perfil[0]?.id} />
            : <div className='h-[150px] w-[150px] sm:h-[188px] sm:w-[188px] bg-slate-600 rounded-full animate-pulse my-1'></div>
          }
        </ContenedorImgPerfil>

        <ContenedorTextoPerfil>
          <div className='flex justify-between w-full'>
            {perfil.length !== 0 ?
              <p className='font-primaria font-[400] text-3xl' >{perfil[0].nombres + ' ' + perfil[0].apellidos}</p>
              :
              <div className='h-8 w-8/12 bg-slate-600 rounded-md animate-pulse my-1'></div>
            }
            {usuario !== null && <Icon onClick={() => setConfig(true)} className='cursor-pointer' icon="solar:settings-outline" color="white" width="30" />}
          </div>
          {perfil.length !== 0 ?
            <>
              <p className='font-primaria font-[200] text-[#acacac] mb-2'>{perfil[0].habilidades}</p>
              <ContenedorRedesSocialesPerfil
                icon='skill-icons:discord'
                name={perfil[0].residencia}
                url={'https://discord.gg/dNavpKnJUM'}
              />
            </>
            :
            <>
              <div className='h-8 w-6/12 bg-slate-600 rounded-md animate-pulse my-1'></div>
              <div className='h-6 w-3/12 bg-slate-600 rounded-md animate-pulse my-1'></div>
            </>
          }
          <div className='flex my-4 flex-wrap justify-between'>
            {perfil.length !== 0 ?
              <>
                {perfil[0]?.github !== '' &&
                  <ContenedorRedesSocialesPerfil
                    icon='fa:github-square'
                    name='GitHub'
                    url={perfil[0].github}
                  />
                }
                {perfil[0]?.linkedin !== '' &&
                  <ContenedorRedesSocialesPerfil
                    icon='devicon:linkedin'
                    name='Linkedin'
                    url={perfil[0].linkedin}
                  />
                }
                {perfil[0]?.youtube !== '' &&
                  <ContenedorRedesSocialesPerfil
                    icon='logos:youtube-icon'
                    name='YouTube'
                    url={perfil[0].youtube}
                  />
                }
                {perfil[0]?.tiktok !== '' &&
                  <ContenedorRedesSocialesPerfil
                    icon='logos:tiktok-icon'
                    name='TikTok'
                    url={perfil[0].tiktok}
                  />
                }

                {perfil[0]?.instagram !== '' &&
                  <ContenedorRedesSocialesPerfil
                    icon='skill-icons:instagram'
                    name='Instagram'
                    url={perfil[0].instagram}
                  />
                }

                <div className='flex justify-end group grow'>
                  {usuario !== null && <CerrarSesion />}
                </div>
              </>
              :
              <div className='flex w-full'>
                <div className='h-5 w-3/12 bg-slate-600 rounded-md animate-pulse mx-1'></div>
                <div className='h-5 w-3/12 bg-slate-600 rounded-md animate-pulse mx-1'></div>
                <div className='h-5 w-3/12 bg-slate-600 rounded-md animate-pulse mx-1'></div>
              </div>
            }

          </div>
        </ContenedorTextoPerfil>

      </ContenedorDescripcionPerfil>
    </>
  );
}

export default Header;