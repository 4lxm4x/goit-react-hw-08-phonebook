import ContactForm from './components/ContactForm/ContactForm';
import Home from './components/Home/Home';
// import Contacts from 'components/Contacts/Contacts';
// import Filter from './components/Filter/Filter';
import ResponsiveAppBar from './components/NavBar/ResponsiveAppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  requestCurrentUser,
  fetchContacts,
} from './redux/operations/operations';
import useAuth from 'components/Hooks/useAuth';
import { PrivateRoute } from './PrivateRoutes';

import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const user = useAuth();
  // const user = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCurrentUser(user.token));
    if (user.isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, user.isLoggedIn, user.token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
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
