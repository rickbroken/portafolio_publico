import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const actualizarConfigPerfil = async(id, urlImagenPerfil) => {
  try {
    await updateDoc(doc(db, 'Perfiles', id), {
      urlImagenPerfil: urlImagenPerfil
    });
  } catch (error) {
    return console.log(error);
  }
}
 
export default actualizarConfigPerfil;