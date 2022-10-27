import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.Config';

export const AuthContext =createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    const gProviderLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
            console.log('inside auth state change',currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            unsubscribe()

        }
    },[])

    const authInfo = {user, createUser,logIn,providerLogin,gProviderLogin,logOut,loading};
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;