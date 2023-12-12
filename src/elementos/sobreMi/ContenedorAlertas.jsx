import React from 'react';
import alertTwotone from '@iconify/icons-line-md/alert-twotone';
import ContenedorAlertaFormulario from '../ContenedorAlertaFormulario';
import { differenceInHours, getTime } from 'date-fns';

const ContenedorAlertas = ({status}) => {
  const fechaActual = getTime(new Date());
  const fechaEnvio = parseInt(localStorage.getItem('fechaEnvio'));
  const tiempoUnixBloqueoTemp = 259200000;

  const horasRestantes = differenceInHours(fechaEnvio + tiempoUnixBloqueoTemp, fechaActual);

  return (
    status === 200 ?
      <ContenedorAlertaFormulario
        color="#3788f1"
        icon="line-md:check-all"
        text="Mensaje enviado correctamente, pronto atendere tu solicitud."
        subText={`Puedes enviar un nuevo mensaje despues de ${horasRestantes} Horas`}
      />
    : status === 'reCAPTCHA failed' || status === 'Please complete the reCAPTCHA' ?
      <ContenedorAlertaFormulario
        icon="logos:recaptcha"
        text="Verifica que no seas un robot, click en 'No soy un robot'  :)"
      />
    : status === 500 &&
      <ContenedorAlertaFormulario
        errorServer={true}
        icon={alertTwotone}
        color="#df2c2c"
        text="Error interno del servidor, intentalo mas tarde :("
      />
  );
}
 
export default ContenedorAlertas;