import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
// import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations/operations';
import { Fab, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

import { Box } from '@mui/system';

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const namesInState = contacts.map(contact => contact.name);
  const [contactAdded, setContactAdded] = React.useState(false);
  const [failureToAdd, setFailureToAdd] = React.useState(false);

  const onHandleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value.replaceAll(' ', '');
    if (namesInState.includes(name)) {
      // Notify.failure('Name already exist');
      setFailureToAdd(true);
      e.target.reset();
    } else {
      dispatch(
        addContact({
          name,
          number,
        })
      );
      setContactAdded(true);
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
        <FormControl variant="outlined">
          {' '}
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            autoFocus
            required
            validate
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
            type="tel"
            onChange={onHandleNumberInput}
          ></TextField>
          <Fab variant="extended" size="medium" color="primary" type="submit">
            Add contact
          </Fab>
        </FormControl>
      </Box>
      <Snackbar
        open={contactAdded}
        // anchorOrigin={{top,center}}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Contact successfully added"
        // action={action}
      />
      <Snackbar
        open={failureToAdd}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Name already exists"
        // action={action}
      />

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
