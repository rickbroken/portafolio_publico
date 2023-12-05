
export const eliminarHabilidad = (id,habilidades,setHabilidades) => {
  const nuevasHerramientas = habilidades.filter((herramienta)=>(herramienta.id !== id))
  setHabilidades(nuevasHerramientas);
}