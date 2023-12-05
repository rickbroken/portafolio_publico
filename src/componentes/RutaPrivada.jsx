import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextos/useAuth';


const RutaPrivada = ({children}) => {
  const redireccionar = useNavigate();
  const {usuario} = useAuth();
  const [componente, setComponente] = useState();
  useEffect(()=>{
    if(usuario){
      setComponente(children);
    } else if(usuario === null || usuario === false){
      redireccionar('/login');
    }
  },[usuario, redireccionar, children]);

  return componente;
}
export default RutaPrivada;