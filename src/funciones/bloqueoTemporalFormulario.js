import { getTime } from "date-fns";

export const bloqueoTemporalFormulario = (setStatus) => {
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
}