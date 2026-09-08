import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PoliticaPrivacidadSlither = () => {
  return (
    <main className='w-full max-w-3xl mx-auto py-8 sm:py-12' aria-labelledby='privacy-title'>
      <Helmet>
        <title>Política de Privacidad — Slither Friend Tracker</title>
        <meta
          name='description'
          content='Conoce cómo Slither Friend Tracker procesa y utiliza los datos necesarios para permitir el seguimiento entre jugadores durante partidas de Slither.'
        />
      </Helmet>

      <article className='rounded-2xl bg-[#1c264288] px-5 py-8 sm:px-10 sm:py-12'>
        <header className='mb-10 border-b border-[#4d4c4c] pb-8'>
          <h1 id='privacy-title' className='text-3xl font-semibold leading-tight sm:text-4xl'>
            Política de Privacidad — Slither Friend Tracker
          </h1>
          <p className='mt-4 text-sm font-light text-[#acacac]'>Última actualización: 8 de septiembre de 2026</p>
          <p className='mt-6 font-light leading-7'>Slither Friend Tracker es una herramienta diseñada para permitir que jugadores de Slither que voluntariamente deciden conectarse puedan localizarse mutuamente durante una partida.</p>
          <p className='mt-4 font-light leading-7'>Esta Política de Privacidad explica qué información procesa el servicio, para qué se utiliza y cómo interviene en la comunicación entre los jugadores.</p>
        </header>

        <div className='space-y-10 font-light leading-7 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-medium [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-4 [&_ul]:space-y-2'>
          <section aria-labelledby='datos-procesados'>
            <h2 id='datos-procesados'>1. Datos procesados</h2>
            <p>Para proporcionar su funcionalidad, Slither Friend Tracker puede procesar los siguientes datos relacionados con una partida:</p>
            <ul className='mt-4'>
              <li>Nickname utilizado por el jugador en Slither.</li><li>Nickname del amigo que el usuario decide localizar.</li><li>Coordenadas virtuales X/Y del jugador dentro del mapa de la partida.</li><li>Información visual básica de la serpiente necesaria para identificarla o resaltarla.</li><li>Escala o tamaño de la serpiente cuando resulte necesario para su representación.</li><li>Servidor de Slither utilizado durante la partida.</li><li>Identificador técnico del servidor o SID cuando esté disponible.</li><li>Estado técnico necesario para establecer y mantener la conexión entre los jugadores.</li>
            </ul>
            <p>Las coordenadas procesadas pertenecen exclusivamente al mapa virtual del videojuego.</p>
            <p>No representan la ubicación física del usuario, coordenadas GPS ni la geolocalización de su dispositivo.</p>
          </section>

          <section aria-labelledby='finalidad'><h2 id='finalidad'>2. Finalidad del tratamiento</h2><p>La información se utiliza exclusivamente para proporcionar las funciones principales de Slither Friend Tracker, entre ellas:</p><ul className='mt-4'><li>Calcular la dirección hacia el amigo seleccionado.</li><li>Calcular la distancia entre ambos jugadores.</li><li>Mostrar la posición del amigo dentro del minimapa.</li><li>Identificar visualmente la serpiente del amigo.</li><li>Resaltar la serpiente del amigo cuando se encuentra visible.</li><li>Verificar que ambos jugadores se encuentren en el mismo servidor de Slither.</li><li>Mantener la comunicación necesaria durante la sesión de seguimiento.</li></ul><p>Los datos no se utilizan para fines ajenos a estas funciones.</p></section>

          <section aria-labelledby='comunicacion'><h2 id='comunicacion'>3. Comunicación entre jugadores</h2><p>Slither Friend Tracker permite que dos jugadores que voluntariamente deciden conectarse intercambien la información necesaria para localizarse durante la partida.</p><p>Cada usuario selecciona explícitamente el nickname del jugador con el que desea conectarse.</p><p>Durante una conexión activa pueden intercambiarse:</p><ul className='mt-4'><li>nickname;</li><li>posición virtual;</li><li>información básica de la serpiente;</li><li>información del servidor de la partida.</li></ul><p>Esta transferencia tiene como única finalidad proporcionar las funciones de seguimiento solicitadas por los propios jugadores.</p></section>

          <section aria-labelledby='peerjs-webrtc'><h2 id='peerjs-webrtc'>4. PeerJS y WebRTC</h2><p>Slither Friend Tracker utiliza tecnologías como PeerJS y WebRTC para facilitar la comunicación entre los navegadores participantes.</p><p>PeerJS se distribuye como parte del software correspondiente y no requiere que el navegador descargue código JavaScript remoto para ejecutar las funciones principales de la herramienta.</p><p>La infraestructura utilizada para establecer las conexiones puede procesar temporalmente información técnica necesaria para facilitar la comunicación entre los navegadores.</p><p>RickBroken no debe presentarse en esta página como operador de la infraestructura pública de PeerJS ni afirmar que controla servicios externos que no administra directamente.</p></section>

          <section aria-labelledby='almacenamiento'><h2 id='almacenamiento'>5. Almacenamiento local</h2><p>La herramienta puede utilizar almacenamiento local del navegador para conservar exclusivamente información necesaria para facilitar su utilización, como:</p><ul className='mt-4'><li>el último nickname de amigo seleccionado;</li><li>el estado de consentimiento de privacidad;</li><li>la versión del consentimiento aceptado.</li></ul><p>Esta información se mantiene localmente en el navegador del usuario.</p><p>Slither Friend Tracker no utiliza este almacenamiento para crear un historial general de navegación.</p></section>

          <section aria-labelledby='conservacion'><h2 id='conservacion'>6. Conservación de la información</h2><p>Slither Friend Tracker no mantiene una base de datos propia permanente destinada a almacenar el historial de posiciones de los jugadores.</p><p>Las coordenadas y demás información relacionada con la partida se procesan mientras las funciones de seguimiento están activas.</p><p>La infraestructura de terceros utilizada para establecer comunicaciones puede estar sujeta a sus propias prácticas técnicas y políticas.</p></section>

          <section aria-labelledby='venta'><h2 id='venta'>7. Venta, publicidad y perfiles</h2><p>Slither Friend Tracker:</p><ul className='mt-4'><li>no vende los datos de los usuarios;</li><li>no utiliza los datos para publicidad personalizada;</li><li>no utiliza los datos para marketing;</li><li>no utiliza los datos para scoring;</li><li>no utiliza los datos para elaborar perfiles comerciales;</li><li>no utiliza los datos para fines no relacionados con la función de seguimiento entre jugadores.</li></ul></section>

          <section aria-labelledby='uso-limitado'><h2 id='uso-limitado'>8. Uso limitado de datos</h2><p>El uso de los datos por Slither Friend Tracker se limita exclusivamente a proporcionar y mantener su finalidad principal: permitir que jugadores que voluntariamente deciden conectarse puedan localizarse dentro de una partida de Slither.</p><p>Los datos no se utilizan ni transfieren para publicidad personalizada, elaboración de perfiles comerciales, venta de información o fines no relacionados con esta funcionalidad.</p></section>

          <section aria-labelledby='seguridad'><h2 id='seguridad'>9. Seguridad</h2><p>Se aplican medidas técnicas razonables destinadas a limitar el tratamiento de información a los datos necesarios para proporcionar la funcionalidad del servicio.</p><p>El código ejecutable correspondiente a la herramienta se distribuye dentro de su propio paquete y no está diseñado para ejecutar instrucciones recibidas dinámicamente desde fuentes externas.</p><p>Ningún sistema conectado a Internet puede garantizar seguridad absoluta, por lo que no debe interpretarse esta sección como una garantía absoluta frente a todos los posibles riesgos.</p></section>

          <section aria-labelledby='control'><h2 id='control'>10. Control del usuario</h2><p>El usuario mantiene control sobre el uso de las funciones de seguimiento.</p><p>Puede:</p><ul className='mt-4'><li>decidir con qué amigo desea conectarse;</li><li>dejar de seguir a un jugador;</li><li>cerrar la conexión;</li><li>revocar su consentimiento cuando la herramienta proporcione dicha opción;</li><li>eliminar la información almacenada localmente;</li><li>deshabilitar o desinstalar la herramienta.</li></ul></section>

          <section aria-labelledby='datos-no-solicitados'><h2 id='datos-no-solicitados'>11. Datos que no se solicitan</h2><p>Slither Friend Tracker no necesita solicitar para su funcionamiento:</p><ul className='mt-4'><li>contraseñas;</li><li>credenciales de autenticación;</li><li>información bancaria;</li><li>números de tarjetas de crédito;</li><li>información sanitaria;</li><li>documentos de identidad;</li><li>ubicación GPS;</li><li>comunicaciones personales;</li><li>historial general de navegación.</li></ul></section>

          <section aria-labelledby='cambios'><h2 id='cambios'>12. Cambios en esta Política de Privacidad</h2><p>Esta Política de Privacidad puede actualizarse cuando cambien las funciones del servicio, sus prácticas de tratamiento de datos o los requisitos aplicables.</p><p>Cuando un cambio implique una modificación relevante en el tratamiento de información, podrán aplicarse las medidas de divulgación o consentimiento correspondientes.</p><p>La fecha de la última actualización se mostrará al inicio de esta página.</p></section>

          <section aria-labelledby='contacto'><h2 id='contacto'>13. Contacto</h2><p>Para consultas relacionadas con esta Política de Privacidad o con Slither Friend Tracker, utiliza el canal de contacto público que RickBroken ya tenga configurado en el sitio.</p></section>
        </div>

        <div className='mt-12 border-t border-[#4d4c4c] pt-8'>
          <Link className='font-medium text-[#14a6e0] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14a6e0]' to='/'>Volver a RickBroken</Link>
        </div>
      </article>
    </main>
  );
};

export default PoliticaPrivacidadSlither;
