import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations/operations';
import { Fab, TextField } from '@mui/material';

import { Box } from '@mui/system';

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const namesInState = contacts.map(contact => contact.name);

  const onHandleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value.replaceAll(' ', '');
    if (namesInState.includes(name)) {
      Notify.failure('Name already exist');
      e.target.reset();
    } else {
      dispatch(
        addContact({
          name,
          number,
        })
      );
      e.target.reset();
    }
  };

  const onHandleNameInput = e => {
    return e.target.value;
  };

  const onHandleNumberInput = e => {
    return e.target.value;
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={onHandleFormSubmit}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          sx={{
            paddingTop: 1,
            paddingBottom: 1,
          }}
          autoFocus
          required
          margin="dense"
          id="nameField"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          onChange={onHandleNameInput}
        ></TextField>
        <TextField
          sx={{
            paddingTop: 1,
            paddingBottom: 1,
          }}
          autoFocus
          required
          margin="dense"
          id="numberField"
          label="Number"
          name="number"
          variant="standard"
          type="phone"
          onChange={onHandleNumberInput}
        ></TextField>

        <Fab variant="extended" size="medium" color="primary" type="submit">
          Add contact
        </Fab>
      </Box>

      {/* <form action="" className="contactForm" onSubmit={onHandleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="contactInput"
          placeholder="Plase input your name"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onHandleNameInput}
        />
        <label htmlFor="number">Number</label>

        <input
          type="tel"
          id="number"
          className="contactInput"
          placeholder="Please input your phone number"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onHandleNumberInput}
        />
      </form> */}
    </div>
  );
}
