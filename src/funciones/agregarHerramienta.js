import {v4 as uuidv4} from 'uuid';

export const agregarHerramienta = (nombre, icono, herramientas, setHerramientas) => {
  setHerramientas([
    ...herramientas,
    {
      habilidad: nombre,
      icon: icono,
      id: uuidv4()
    }
  ])
}