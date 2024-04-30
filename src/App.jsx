import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ResponsiveAppBar from './components/NavBar/NavBar';

import './App.css';

export default function App() {
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
