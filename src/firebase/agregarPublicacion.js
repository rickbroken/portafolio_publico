import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import {db} from './firebaseConfig';
import { format } from "date-fns";


const agregarPublicacion = async(textoPublicacion,url,tipoMultimedia,formatoMovil,idUsuario,nameMuntimedia)  => {
  const fechaActual = new Date();
  const fechaUnix = format(fechaActual, 't');

  const nuevaPublicacion = await addDoc(collection(db, "Publicaciones"),{
    texto: textoPublicacion,
    fecha: fechaUnix,
    idUsuario: idUsuario,
    urlMultimedia: url,
    tipoMultimedia: tipoMultimedia,
    formatoMovil: formatoMovil,
    nameMuntimedia:nameMuntimedia,
    editado: false
  });

  await setDoc(doc(db, "Interacciones", nuevaPublicacion.id),{
    idDoc: nuevaPublicacion.id,
    idUsuario: idUsuario,
    mencanta: 0,
    megusta: 0
  });


}
 
export default agregarPublicacion;