import ContactForm from './components/ContactForm/ContactForm';
import Home from './components/Home/Home';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ResponsiveAppBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  requestCurrentUser,
  fetchContacts,
} from './redux/operations/operations';
import { Portal } from '@mui/base/Portal';
import useAuth from 'components/Hooks/useAuth';

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
  }, []);

  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<ContactForm />} />
        </Route>
      </Routes>
    </>
  );
}
