import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { format } from "date-fns";


const agregarProyecto = async(idUsuario,titulo,descripcion,caracteristicas,demoLive,figma,github,linkedin,urlMultiPrev,urlMultimedia) => {


  const fechaActual = new Date();
  const fechaUnix = format(fechaActual, 't');

  try {
    await addDoc(collection(db,'Proyectos'), {
      demoLive: demoLive,
      titulo: titulo,
      caracteristicas: caracteristicas,
      descripcion: descripcion,
      idUsuario: idUsuario,
      fecha: fechaUnix,
      figma: figma,
      github: github,
      linkedin: linkedin,
      urlMultiPrev: urlMultiPrev,
      urlMultimedia: urlMultimedia
    });
  } catch (error) {
    console.log('hubo un error al intentar enviar el proyecto :(');
  }
}
 
export default agregarProyecto;