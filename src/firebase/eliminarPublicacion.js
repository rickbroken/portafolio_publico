import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const eliminarPublicacion = async(id) => {
  try {
    await deleteDoc(doc(db,'Publicaciones',id));
  } catch (error) {
    return console.log(error);
  }
}
 
export default eliminarPublicacion;