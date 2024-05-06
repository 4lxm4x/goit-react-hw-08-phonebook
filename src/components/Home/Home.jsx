import Contacts from 'components/Contacts/Contacts';
import useAuth from 'components/Hooks/useAuth';
import './Home.css';

export default function Home() {
  const user = useAuth();

  return (
    <>
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