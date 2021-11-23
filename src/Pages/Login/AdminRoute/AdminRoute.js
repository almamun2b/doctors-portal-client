import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }

    if (user.email && admin) {
        return children
    }
    return <Navigate to="/dashboard" state={{ from: location }} />;

    // React Router V5
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             user.email && admin ? (
    //                 children
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: "/dashboard",
    //                         state: { from: location }
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );

};

export default AdminRoute;