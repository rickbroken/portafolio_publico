import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"


const actualizarHabilidades = async(id,habilidad,tipoHabilidad) => {
  console.log(habilidad);
  try {
    await updateDoc(doc(db, 'Perfiles', id),{
      [tipoHabilidad]: habilidad
    })
  } catch (error) {
    return console.log(error);
  }
}

export default actualizarHabilidades;