import { FormControl } from '@mui/base/FormControl';
import { useEffect, useState } from 'react';
// import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './RegisterForm.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/operations/operations';
import useAuth from 'components/Hooks/useAuth';
import { modalOpen } from '../../redux/slices/modalSlice';

export default function RegisterForm() {
  // const [open, setOpen] = useState();
  const user = useAuth();
  // useEffect(() => {
  //   user.isLoggedIn ? setOpen(false) : setOpen(true);
  // }, [user.isLoggedIn]);
  // user.isLoggedIn ? setOpen(false) : setOpen(true);

  const dispatch = useDispatch();
  // const handleClose = () => {
  //   setOpen(false);
  //   close(false);
  // };

  const handleClose = () => {
    // setOpen(false);
    // setOpen(false);
    console.log('🚀 ~ handleClose ~ handleClose:', handleClose);
    dispatch(modalOpen(false));
    // sendClosed = false;

    // return true;
  };

  // const handleOpen = isOpen => {
  //   console.log('🚀 ~ handleOpen ~ handleOpen:', handleOpen);
  //   return isOpen;
  // };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: event => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const userData = Object.fromEntries(formData.entries());
          dispatch(registerUser(userData));
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
            autoFocus
            required
            margin="dense"
            id="nameField"
            label="Name"
            name="name"
            variant="standard"
            type="text"
          ></TextField>
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            autoFocus
            required
            margin="dense"
            id="emailField"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          ></TextField>
          <TextField
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
            id="passwordField"
            name="password"
            label="Password"
            variant="standard"
            type="password"
            autoFocus
            required
            margin="dense"
          ></TextField>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleClose}>
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
}
