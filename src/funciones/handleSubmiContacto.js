import { getTime } from "date-fns";

export const handleSubmitContacto = async (event,limpiarFormulario,setStatus) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fechaActual = getTime(new Date());

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
      localStorage.setItem('fechaEnvio', fechaActual);
      event.target.reset();
      limpiarFormulario();
      setStatus(response.status);
    } else {
      const data = await response.json();
      if (data && data.errors) {
        console.log(data.errors.map(error => error.message).join(', '));
      } else {
        setStatus(data.error);
        setTimeout(()=>setStatus(false),5000)
      }
    }
  } catch (error) {
    setStatus(500);
    setTimeout(()=>setStatus(false),5000)
  }
};