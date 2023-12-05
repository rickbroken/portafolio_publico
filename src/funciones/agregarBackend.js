import {v4 as uuidv4} from 'uuid';

export const agregarBackend = (nombre, icono, backend, setBackend) => {
  setBackend([
    ...backend,
    {
      habilidad: nombre,
      icon: icono,
      id: uuidv4()
    }
  ])
}