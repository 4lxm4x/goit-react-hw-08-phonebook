import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ResponsiveAppBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations/operations';
import { Portal } from '@mui/base/Portal';
import useAuth from 'components/Hooks/useAuth';

import './App.css';

export default function App() {
  const user = useAuth();
  // const dispatch = useDispatch();
  // useEffect(
  //   () =>
  //     async function fetchData() {
  //       dispatch(fetchContacts());
  //     },
  //   [dispatch]
  // );
  return (
    <>
      <ResponsiveAppBar />

      <div className="mainDiv">
        {/* <h1>Phonebook</h1> */}
        {/* <ContactForm /> */}
        {/* <Filter /> */}

        {user.isLoggedIn && (
          <>
            <h1>Contacts</h1> <Contacts />
          </>
        )}
        {!user.isLoggedIn && <h1>Please Autorize to see contacts</h1>}
      </div>
    </>
  );
}
