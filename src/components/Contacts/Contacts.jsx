import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations/operations';
import './Contacts.css';

import { deleteContact } from '../../redux/operations/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items;
  });

  const filter = useSelector(state => state.filter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
            {contact.name}: {contact.phone}
            <button className="deleteBtn" onClick={onDelete} id={contact.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
