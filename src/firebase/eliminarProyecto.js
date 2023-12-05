import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const eliminarProyecto = async(idDoc) => {
  try {
    await deleteDoc(doc(db,'Proyectos',idDoc))
  } catch (error) {
   console.log('Hubo un error al intentar eliminar el proyecto... :('); 
  }
}
 
export default eliminarProyecto;