import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import Animation from '../assets/Animation';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Animation />
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;