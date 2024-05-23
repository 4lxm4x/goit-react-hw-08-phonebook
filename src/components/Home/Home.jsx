import ContactsNew from 'components/Contacts/ContactsNew';
import useAuth from 'components/Hooks/useAuth';
import './Home.css';

export default function Home() {
  const user = useAuth();

  return (
    <>
      <div className="mainDiv">
        {user.isLoggedIn && (
          <>
            <ContactsNew />
          </>
        )}
        {!user.isLoggedIn && <h1>Please Autorize to see contacts</h1>}
      </div>
    </>
  );
}
