import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';
import ContInputFormulario from '../elementos/ContInputFormulario';
import { handleSubmitContacto } from '../funciones/handleSubmiContacto';
import { bloqueoTemporalFormulario } from '../funciones/bloqueoTemporalFormulario';
import { handleNameAndPhone } from '../funciones/handleNameAndPhone';
import ContenedorAlertas from '../elementos/sobreMi/ContenedorAlertas';


const ValidacionFormulario = () => {
  const [status, setStatus] = useState(false);

  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    bloqueoTemporalFormulario(setStatus);
  },[status])

  const limpiarFormulario = () =>{
    setNombres('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Helmet>

      <form 
        className='relative w-96 bg-[#09181d] rounded-md px-8 flex flex-col items-center my-6' 
        data-aos='zoom-out-right' 
        data-aos-duration='2000' 
        onSubmit={(e)=>handleSubmitContacto(e,limpiarFormulario,setStatus)}>
      <p className='mt-6'>Contactame:</p>
      <ContInputFormulario 
        name="name"
        type="text"
        label="Nombres:"
        required={true}
        setInput={handleNameAndPhone}
        value={nombres}
        setNombres={setNombres}
      />
      <ContInputFormulario 
        name="email"
        type="email"
        label="Correo Electronico:"
        required={true}
        setInput={setEmail}
        value={email}
      />
      <ContInputFormulario 
        name="phone"
        type="tel"
        label="Telefono:"
        subLabel="(Con indicativo del pais)"
        required={true}
        setInput={handleNameAndPhone}
        value={phone}
        setPhone={setPhone}
      />

      <ContInputFormulario 
        name="message"
        type="text"
        label="Mensaje:"
        subLabel="(Opcional)"
        required={false}
        setInput={setMessage}
        value={message}
      />

      <div required className="g-recaptcha" data-sitekey={import.meta.env.VITE_API_KEY_SITE_CAPTCHA}></div>

      <button
        className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center cursor-pointer'
        type="submit"
      >
        <Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
        Enviar
      </button>
        <ContenedorAlertas status={status} />
    </form>
    </>
  );
}

const FormularioTest = () => {
  return ( <ValidacionFormulario /> );
}
 
export default FormularioTest;