import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import './Contacts.css';

import { deleteContact } from '../../redux/operations/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items;
  });

  const filter = useSelector(state => state.filter);

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
