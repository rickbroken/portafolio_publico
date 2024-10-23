
export function comparar_arreglos_de_objetos(arreglo1, arreglo2) {
  // Verificar si tienen la misma longitud
  if (arreglo1?.length !== arreglo2?.length) {
    return false;
  }

  // Ordenar los arreglos para que el orden no afecte la comparación
  const arreglo1_ordenado = arreglo1?.map(obj => JSON.stringify(obj)).sort();
  const arreglo2_ordenado = arreglo2?.map(obj => JSON.stringify(obj)).sort();

  // Comparar cada objeto
  for (let i = 0; i < arreglo1_ordenado?.length; i++) {
    if (arreglo1_ordenado[i] !== arreglo2_ordenado[i]) {
      return false;
    }
  }

  return true;
}