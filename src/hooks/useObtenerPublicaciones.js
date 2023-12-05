import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';

const useObtenerPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [existenPublicaciones, setExistenPublicaciones] = useState();
    const {usuario} = useAuth();

    useEffect(()=>{
      const consulta = query(
          collection(db, 'Publicaciones'),
          //where('idUsuario', '==', usuario.uid),
          orderBy('fecha', 'desc')
      );
    
      const unsuscribe = onSnapshot(consulta, async(snapshot) => {
        const TodasPublicaciones = snapshot.docs.map(publicacion => ({...publicacion.data(),id: publicacion.id}));
        if(TodasPublicaciones.length !== 0){
          setExistenPublicaciones(true);
        } else {
          setExistenPublicaciones(false);
        }

        setPublicaciones(TodasPublicaciones);
      });

      return unsuscribe;
    },[setPublicaciones])
    

    return {publicaciones, existenPublicaciones};
}

export default useObtenerPublicaciones;