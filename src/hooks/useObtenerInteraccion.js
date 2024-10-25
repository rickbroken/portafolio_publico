import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const useObtenerInteraccion = () => {
  const [interacciones, setInteracciones] = useState();

  useEffect(()=>{
    const consulta = query(
      collection(db, 'Interacciones')
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