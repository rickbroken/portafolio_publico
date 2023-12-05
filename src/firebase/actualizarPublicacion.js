import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { format } from "date-fns";

const actualizarPublicacion = async(id,texto, urlNuevaMultimedia, tipoMultimedia) => {
  const fechaActual = new Date();
  const fechaUnix = format(fechaActual, 't');

  try {
    urlNuevaMultimedia ?
    await updateDoc(doc(db, 'Publicaciones', id),{
      texto: texto,
      fechaEdicion: fechaUnix,
      editado: true,
      tipoMultimedia: tipoMultimedia,
      urlMultimedia: urlNuevaMultimedia
    })
    :
    await updateDoc(doc(db, 'Publicaciones', id),{
      texto: texto,
      fechaEdicion: fechaUnix,
      editado: true,
    })
  } catch (error) {
    return console.log(error);
  }
}
 
export default actualizarPublicacion;