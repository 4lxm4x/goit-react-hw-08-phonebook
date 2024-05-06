import { useDispatch, useSelector } from 'react-redux';
import './Contacts.css';

import { deleteContact } from '../../redux/operations/operations';
// import useAuth from '../../components/Hooks/useAuth';

export default function Contacts() {
  const dispatch = useDispatch();
  // const user = useAuth();
  const contacts = useSelector(state => {
    console.log('🚀 ~ contacts ~ state:', state);

    return state.contacts.items;
  });

  const filter = useSelector(state => state.filter);

  // useEffect(() => {
  //   if (user.isLoggedIn) {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, user.isLoggedIn]);

  function onDelete(e) {
    dispatch(deleteContact(e.target.id));
  }

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button className="deleteBtn" onClick={onDelete} id={contact.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
