import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const editarProyecto = async(idDoc,titulo,caracteristicas,descripcion,demoLive,figma,github,linkedin,urlMultiPrev,urlMultimedia) => {
  try {

      await updateDoc(doc(db,'Proyectos',idDoc),{
        titulo: titulo,
        caracteristicas: caracteristicas,
        descripcion: descripcion,
        figma: figma,
        github: github,
        demoLive: demoLive,
        linkedin: linkedin,
        ...(urlMultiPrev !== '' && { urlMultiPrev }),
        ...(urlMultimedia !== '' && { urlMultimedia }),
      });

  } catch (error) {
    console.log('Hubo un erro al intentar actualizar el proyecto... :(')
  }
}
 
export default editarProyecto;