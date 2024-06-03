import ContactForm from './components/ContactForm/ContactForm';
import Home from './components/Home/Home';
// import Contacts from 'components/Contacts/Contacts';
// import Filter from './components/Filter/Filter';
import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  requestCurrentUser,
  fetchContacts,
} from './redux/operations/operations';
import useAuth from './redux/Hooks/useAuth';
import { PrivateRoute } from './PrivateRoutes';

import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const user = useAuth();
  // const user = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.token) {
      dispatch(requestCurrentUser(user.token));
      dispatch(fetchContacts());
    }
  }, [dispatch, user.token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />

          <Route
            path="/add"
            element={
              <PrivateRoute component={<ContactForm />} redirectTo="/" />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
