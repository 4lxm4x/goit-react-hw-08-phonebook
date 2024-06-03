import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations/operations';
import { Fab, TextField, FormControl } from '@mui/material';

import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  Notify.init({ position: 'left-bottom' });

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

      navigate('/');

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
    </div>
  );
}
