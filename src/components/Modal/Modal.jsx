import { FormControl } from '@mui/base/FormControl';
import { useState } from 'react';
// import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Modal.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function RegisterForm(isModalOpen) {
  return (
    <Dialog
      open={isModalOpen}
      // onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: event => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
        },
      }}
    >
      <DialogTitle>Register Form</DialogTitle>
      <DialogContent>
        <FormControl size="medium" className="modalForm">
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            id="nameField"
            label="Name"
            variant="outlined"
            type="text"
            required
          ></TextField>
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            id="emailField"
            label="Email"
            variant="outlined"
            type="email"
            required
          ></TextField>
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            id="passwordField"
            label="Password"
            variant="outlined"
            type="password"
            required
          ></TextField>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button type="submit">Register</Button>
      </DialogActions>
    </Dialog>
  );
}
