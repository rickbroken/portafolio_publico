import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const actualizarConfigPerfil = async(id, nombres, apellidos, figma, github, habilidades, instagram, linkedin, residencia, quienSoy) => {
  try {
    await updateDoc(doc(db, 'Perfiles', id), {
      nombres: nombres,
      apellidos: apellidos,
      figma: figma,
      github: github,
      habilidades: habilidades,
      instagram: instagram,
      linkedin: linkedin,
      residencia: residencia,
      quiensoy: quienSoy
    });
  } catch (error) {
    return console.log(error);
  }
}
 
export default actualizarConfigPerfil;