import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query } from 'firebase/firestore';

const useObtenerPerfil = () => {
    const [perfil, setPerfil] = useState([]);

    useEffect(()=>{
      const consulta = query(
          collection(db, 'Perfiles')
      );
    
      const unsuscribe = onSnapshot(consulta, (snapshot) => {
        setPerfil(snapshot.docs.map(data => ({...data.data(), id: data.id})));
      });

      return unsuscribe;
    },[setPerfil])
    

    return {perfil} ;
}

export default useObtenerPerfil;