import { useSelector } from 'react-redux';

export default function useAuth() {
  const user = useSelector(state => state.register);
  console.log('🚀 ~ useAuth ~ user:', user);
  return user;
}
