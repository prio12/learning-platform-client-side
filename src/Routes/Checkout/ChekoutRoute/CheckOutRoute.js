import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckOutRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    if(user && user.uid) {
        return children
    }
    else{
        return <Navigate to='/signIn'></Navigate>
    }
};

export default CheckOutRoute;