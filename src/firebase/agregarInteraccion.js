import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";


const agredarInteraccion = async(id,tipo,index) => {
  if(tipo === 'megusta'){
    await updateDoc(doc(db,'Interacciones',id),{
      megusta: index
    });
  } else if(tipo === 'mencanta'){
    await updateDoc(doc(db,'Interacciones',id),{
      mencanta: index
    });
  }
}
 
export default agredarInteraccion;