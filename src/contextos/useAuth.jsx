import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

//Creamos contexto
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    //Contiene la informacion del usuario
    const [usuario, cambiarUsuario] = useState();

    //Carla la comprobacion de onAuthStateChange
    const [cargando, cambiarCargando] = useState(true);


    useEffect(()=>{
      const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
			cambiarUsuario(usuario);
			cambiarCargando(false);
		});

		return cancelarSuscripcion;
    },[]);
    
    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
           {/* Solamente retornamos los elementos hijos cuando no este cargando. 
			De esta forma nos aseguramos de no cargar el resto de la app hasta que el usuario haya sido establecido.
			
			Si no hacemos esto al refrescar la pagina el componente children intenta cargar inmediatamente, 
			antes de haber comprobado que existe un usuario. */}
            {!cargando && children}
        </AuthContext.Provider>
     );
}

export {AuthProvider, useAuth};