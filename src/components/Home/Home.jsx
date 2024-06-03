import Contacts from 'components/Contacts/Contacts';
import useAuth from '../../redux/Hooks/useAuth';
import './Home.css';

export default function Home() {
  const user = useAuth();

  return (
    <>
      <div className="mainDiv">
        {user.isLoggedIn && (
          <>
            <Contacts />
          </>
        )}
        {!user.isLoggedIn && <h1>Please Autorize to see contacts</h1>}
      </div>
    </>
  );
}
