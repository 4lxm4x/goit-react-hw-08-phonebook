import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
// import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations/operations';
import { Alert, Fab, TextField, Snackbar, FormControl } from '@mui/material';

import { Box } from '@mui/system';
import { redirect } from 'react-router-dom';

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
    return redirect('/');
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
      >
        <Alert severity="success">Contact successfully added</Alert>
      </Snackbar>
      <Snackbar open={failureToAdd} autoHideDuration={6000}>
        <Alert severity="error">Name already exists</Alert>
      </Snackbar>
    </div>
  );
}
