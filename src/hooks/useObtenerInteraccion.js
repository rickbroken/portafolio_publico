import { useEffect, useState } from "react";
import { useAuth } from "../contextos/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const useObtenerInteraccion = () => {
  const [interacciones, setInteracciones] = useState();
  const {usuario} = useAuth();

  useEffect(()=>{
    const consulta = query(
      collection(db, 'Interacciones')
      //where('idUsuario', '==', usuario.uid)
    )
    const unsuscribe = onSnapshot(consulta,
      (snapshot)=>{
        setInteracciones(snapshot.docs.map(data => data.data()));
    })

    return unsuscribe;    
  },[])

  return {interacciones};
}
 
export default useObtenerInteraccion;