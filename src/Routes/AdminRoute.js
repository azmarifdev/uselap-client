import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../Hooks/useRole';
import Spinner from '../Pages/Share/Spinner';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isRole] = useRole(user?.email);
    // console.log(isRole, 'from AdminRoute');

    if (!isRole) {
        return <Spinner />;
    }
    
    if (user && isRole === 'Admin') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
