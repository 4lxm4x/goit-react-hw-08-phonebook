import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ResponsiveAppBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations/operations';
import { Portal } from '@mui/base/Portal';

import './App.css';

export default function App() {
  const dispatch = useDispatch();
  useEffect(
    () =>
      async function fetchData() {
        dispatch(fetchContacts());
      },
    [dispatch]
  );
  return (
    <>
      <ResponsiveAppBar />

      <div className="mainDiv">
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h1>Contacts</h1>
        <Contacts />
      </div>
    </>
  );
}
