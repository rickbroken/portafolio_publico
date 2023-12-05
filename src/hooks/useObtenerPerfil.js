import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';

const useObtenerPerfil = () => {
    const [perfil, setPerfil] = useState([]);
    const {usuario} = useAuth();

    useEffect(()=>{
      const consulta = query(
          collection(db, 'Perfiles')
          //where('idUsuario', '==', usuario.uid)
      );
    
      const unsuscribe = onSnapshot(consulta, (snapshot) => {
        setPerfil(snapshot.docs.map(data => ({...data.data(), id: data.id})));
      });

      return unsuscribe;
    },[setPerfil])
    

    return {perfil} ;
}

export default useObtenerPerfil;