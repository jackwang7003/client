
import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../redux/authReducer';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuth = useSelector(isAuthenticated);
    return (
        isAuth ? <Outlet /> : <Navigate to='/login' />
    );
}

export default ProtectedRoute;