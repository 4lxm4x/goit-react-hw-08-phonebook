import { Navigate } from 'react-router-dom';
import useAuth from './redux/Hooks/useAuth';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const user = useAuth();
  return !user.isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
