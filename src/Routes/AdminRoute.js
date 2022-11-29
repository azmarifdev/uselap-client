import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../Hooks/useRole';
import Spinner from '../Pages/Share/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isRole, isAdminLoading] = useRole(user?.email);
    console.log(isRole)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
