import React, { useEffect, useState } from 'react';
import alertTwotone from '@iconify/icons-line-md/alert-twotone';
import ContenedorAlertaFormulario from '../ContenedorAlertaFormulario';
import { differenceInHours, differenceInMinutes, getTime } from 'date-fns';

const ContenedorAlertas = ({status}) => {
  const fechaEnvio = parseInt(localStorage.getItem('fechaEnvio'));
  const tiempoUnixBloqueoTemp = 259200000;
  const [horasRestantes, setHorasRestantes] = useState(0);
  const [minutosRestantes, setMinutosRestantes] = useState(0);

  /**
   * Actualizar el tiempo restante cada segundo
   */
  useEffect(() => {
    const actualizarTiempoRestante = () => {
      const fechaActual = getTime(new Date());
      setMinutosRestantes(differenceInMinutes(fechaEnvio + tiempoUnixBloqueoTemp, fechaActual));
      setHorasRestantes(differenceInHours(fechaEnvio + tiempoUnixBloqueoTemp, fechaActual));
    };

    // Actualizar el tiempo restante cada segundo
    const intervalo = setInterval(actualizarTiempoRestante, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, [fechaEnvio, tiempoUnixBloqueoTemp]);


  return (
    status === 200 ?
      <ContenedorAlertaFormulario
        color="#3788f1"
        icon="line-md:check-all"
        text="Mensaje enviado correctamente, pronto atendere tu solicitud."
        subText={`Puedes enviar un nuevo mensaje despues de ${horasRestantes} horas con ${minutosRestantes % 60} Minutos`}
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