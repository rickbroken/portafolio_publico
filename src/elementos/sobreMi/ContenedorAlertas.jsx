import React from 'react';
import alertTwotone from '@iconify/icons-line-md/alert-twotone';
import ContenedorAlertaFormulario from '../ContenedorAlertaFormulario';

const ContenedorAlertas = ({status}) => {
  return (
    status === 200 ?
      <ContenedorAlertaFormulario
        color="#3788f1"
        icon="line-md:check-all"
        text="Mensaje enviado correctamente, pronto atendere tu solicitud."
        subText="Puedes enviar un nuevo mensaje despues de 72 Horas"
      />
    : status === 'reCAPTCHA failed' ?
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