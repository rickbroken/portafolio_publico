import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';


const FormularioTest = () => {
  const [state, handleSubmit] = useForm("mqkvrkvk");
  if (state.succeeded) {
      return <p>¡Gracias por tu interes!</p>;
  }

  console.log(state);



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
          required
        />
      </div>
      <ValidationError 
        prefix='Name' 
        field='name'
        errors={state.errors}
      />
      <div className='w-full my-3'>
        <label htmlFor='email' className='font-[200]'>Correo electronico:</label>
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type='email'
          name='email'
          id='email'
          required
        />
      </div>
      <ValidationError 
        prefix='Email' 
        field='email'
        errors={state.errors}
      />
      <div className='w-full my-3'>
        <label htmlFor='phone' className='font-[200]'>
          Telefono: <span className='text-sm text-[#858282]'>(Con indicativo del pais)</span>
        </label>
        <input 
          className='w-full py-2 pl-4 outline-none font-[200] rounded-md' 
          type='tel'
          name='phone'
          id='phone'
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
          required  
        ></textarea>
      </div>
      <ValidationError 
        prefix='Message' 
        field='message'
        errors={state.errors}
      />

      <div required className="g-recaptcha" data-sitekey="6LdugycpAAAAAL21UCkWhTFiVi_0UzTm3glM5H0r"></div>
      <ValidationError 
        prefix='Message' 
        field='message'
        errors={state.errors}
      />

      <button
        className='bg-[#20b47b] hover:bg-[#1ca06d] active:bg-[#207044] w-40 h-10 rounded-md mx-2 my-4 flex justify-center items-center'
        type="submit" 
        disabled={state.submitting}>
        <Icon icon="mingcute:send-fill" width='22' className='mr-1'/>
        Enviar
      </button>
    </form>
    </>
  );
}

export default FormularioTest;