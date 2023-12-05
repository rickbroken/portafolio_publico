import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvrkvk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  console.log(state);

  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();

  return (
    <>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </Helmet>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div required className="g-recaptcha" data-sitekey="6LdugycpAAAAAL21UCkWhTFiVi_0UzTm3glM5H0r"></div> 
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
   
    </>
  );
}

export default ContactForm;