import {v4 as uuidv4} from 'uuid';

export const agregarFrontend = (nombre, icono, frontend, setFrontend) => {
  setFrontend([
    ...frontend,
    {
      habilidad: nombre,
      icon: icono,
      id: uuidv4()
    }
  ])
}