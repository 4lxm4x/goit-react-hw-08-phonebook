import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations/operations';
import { Fab, Input, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  Notify.init({ position: 'left-bottom' });

  const contacts = useSelector(state => state.contacts.items);
  const namesInState = contacts.map(contact => contact.name);

  const onHandleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = phone.replaceAll(' ', '');

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
          <Input
            sx={{
              paddingTop: 1,
              paddingBottom: 0,
              marginBottom: '10px',
            }}
            autoFocus
            required
            placeholder="Name"
            id="nameField"
            label="Name"
            name="name"
            variant="standard"
            type="text"
            inputProps={{
              pattern: '[A-Za-z ]+',
            }}
            onChange={onHandleNameInput}
          ></Input>
          <PhoneInput
            containerStyle={{
              marginBottom: '10px',
              border: 'none',
              borderBottom: '1px solid grey',
            }}
            buttonStyle={{ backgroundColor: '#fff', border: 'none' }}
            inputStyle={{
              border: 'none',
              borderRadius: '0px',
              width: 'inherit',
              backgrouncColor: 'red',
            }}
            onlyCountries={['ua']}
            placeholder="+380 (##) ### ## ##"
            disableDropdown
            country={'ua'}
            margin="dense"
            id="numberField"
            name="number"
            type="tel"
            onChange={phone => setPhone(phone)}
          ></PhoneInput>
          <Fab variant="extended" size="medium" color="primary" type="submit">
            Add contact
          </Fab>
        </FormControl>
      </Box>
    </div>
  );
}
