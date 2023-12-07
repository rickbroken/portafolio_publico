import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';
import { getTime } from 'date-fns';


const ValidacionFormulario = () => {
  const [status, setStatus] = useState(false);
  const [reloadCaptcha, setReloadCatpcha] = useState(true);

  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); 


  useState(()=>{
    if(localStorage.getItem('formularioEnviado') === 'true'){
      setStatus(200);
    }
    if(localStorage.getItem('fechaEnvio') !== null){
      const fechaActual = getTime(new Date());
      const fechaEnvio = parseInt(localStorage.getItem('fechaEnvio'));
      const tiempoUnixBloqueoTemp = 259200000;
      if(fechaActual > fechaEnvio + tiempoUnixBloqueoTemp){
        localStorage.setItem('formularioEnviado', false);
        setStatus(false);
      }
    }
  },[status])



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/mqkvrkvk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        localStorage.setItem('formularioEnviado', true);
        localStorage.setItem('fechaEnvio',getTime(new Date()));
        event.target.reset();
        setNombres('');
        setEmail('');
        setPhone('');
        setMessage('');
        setReloadCatpcha(false);
        console.log('llegue hasta aqui');
        setStatus(response.status);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          console.log(data.errors.map(error => error.message).join(', '));
        } else {
          console.log(data.error);
          setStatus(data.error);
          setTimeout(()=>setStatus(false),5000)
        }
      }
    } catch (error) {
      setStatus(500);
      setTimeout(()=>setStatus(false),5000)
    }
  };


  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Helmet>

      <form 
        className='relative w-96 bg-[#09181d] rounded-md px-8 flex flex-col items-center my-6' 
        data-aos='zoom-out-right' 
        data-aos-duration='2000' 
        onSubmit={handleSubmit}>

      <p className='mt-6'>Contactame:</p>
      <div className='w-full my-3'>
        <label htmlFor='name' className='font-[200]'>Nombres:</label>
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type='text'
          name='name'
          id='name'
          value={nombres}
          onChange={(e)=>setNombres(e.target.value)}
          required
        />
      </div>
      
      <div className='w-full my-3'>
        <label htmlFor='email' className='font-[200]'>Correo electronico:</label>
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>

      <div className='w-full my-3'>
        <label htmlFor='phone' className='font-[200]'>
          Telefono: <span className='text-sm text-[#858282]'>(Con indicativo del pais)</span>
        </label>
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type='tel'
          name='phone'
          id='phone'
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
        />
      </div>
      <div className='w-full my-3'>
        <label htmlFor='message' className='font-[200]'>
          Mensaje: <span className='text-sm text-[#858282]'>(Opcional)</span>
        </label>
        <textarea 
          className='w-full py-2 pl-4 outline-none font-[200] max-h-48 min-h-[110px] rounded-md' 
          type="text"
          name='message'
          id='message'
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        ></textarea>
      </div>

      {reloadCaptcha && 
        <div required className="g-recaptcha" data-sitekey={import.meta.env.VITE_API_KEY_SITE_CAPTCHA}></div>
      }

      <button
        className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center cursor-pointer'
        type="submit"
      >
        <Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
        Enviar
      </button>
    {status === 200 ? 
      <div className='fixed flex flex-col rounded-md justify-center items-center px-10 bg-[#000000e1] w-full h-full'>
        <Icon icon="line-md:check-all" color='#3788f1' width="150"/>
        <p className='text-center'>
          Mensaje enviado correctamente, pronto atendere tu solicitud.
          <br/>
          <span className='text-gray-600 text-sm px-2'>Puedes enviar un nuevo mensaje despues de 72 Horas</span>
        </p>
      </div>
     : status === 'reCAPTCHA failed' ?
      <div className='fixed flex flex-col rounded-md justify-center items-center px-10 bg-[#000000e1] w-full h-full'>
        <Icon icon="logos:recaptcha" width="150" />
        <p className='text-center my-4'>
          Verifica que no seas un robot, click en 'No soy un robot'  :)
        </p>
      </div>
    : status === 500 &&
      <div className='fixed flex flex-col rounded-md justify-center items-center px-10 bg-[#000000e1] w-full h-full'>
        <Icon icon="line-md:alert-twotone" color='#df2c2c' width="150" />
        <p className='text-center my-4'>
          Error interno del servidor, intentalo mas tarde :(
        </p>
      </div>
    }
    </form>
    </>
  );
}

const FormularioTest = () => {
  return ( <ValidacionFormulario /> );
}
 
export default FormularioTest;