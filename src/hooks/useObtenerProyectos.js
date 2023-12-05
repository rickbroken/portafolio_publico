import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';

const useObtenerProyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [existenProyectos, setExistenProyectos] = useState();
    const {usuario} = useAuth();

    useEffect(()=>{
      const consulta = query(
          collection(db, 'Proyectos'),
          //where('idUsuario', '==', usuario.uid),
          orderBy('fecha', 'desc')
      );
    
      const unsuscribe = onSnapshot(consulta, async(snapshot) => {
        const TodosProyectos = snapshot.docs.map(proyecto => ({...proyecto.data(),id: proyecto.id}));
        if(TodosProyectos.length !== 0){
          setExistenProyectos(true);
        } else {
          setExistenProyectos(false);
        }
        setProyectos(TodosProyectos);
      });

      return unsuscribe;
    },[setProyectos]);
    return {proyectos, existenProyectos};
}

export default useObtenerProyectos;