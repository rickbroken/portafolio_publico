import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';


const FormularioTest = () => {
  const [status, setStatus] = useState('');

  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (event) => {
    console.log(event.target);
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

      console.log(response);
  
      if (response.ok) {
        setStatus('Thanks for your submission!');
        event.target.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setStatus(data.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  useEffect(()=>{
    console.log(status);
  },[status])




  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Helmet>

      <form 
        className='w-96 bg-[#09181d] px-8 flex flex-col items-center my-6' 
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

      <div required className="g-recaptcha" data-sitekey={import.meta.env.VITE_API_KEY_SITE_CAPTCHA}></div>

      <button
        className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center cursor-pointer'
        type="submit"
      >
        <Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
        Enviar
      </button>
    </form>
    </>
  );
}

export default FormularioTest;