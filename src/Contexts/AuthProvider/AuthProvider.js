import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.Config';

export const AuthContext =createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
            console.log('inside auth state change',currentUser);
            setUser(currentUser)
        });

        return () =>{
            unsubscribe()

        }
    },[])

    const authInfo = {user, createUser,logIn,logOut};
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;