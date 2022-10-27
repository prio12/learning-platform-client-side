import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckOutRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div>Loading...</div>
    }
    if(user && user.uid) {
        return children
    }
    else{
        return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
    }
};

export default CheckOutRoute;