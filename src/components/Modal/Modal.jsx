import { FormControl } from '@mui/base/FormControl';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Modal.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/operations/operations';
import { loginUser } from '../../redux/operations/operations';

export default function RegisterForm({ handleModalOpen, handleModalClose }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    handleModalClose(false);
  };

  useEffect(() => {
    if (handleModalOpen === 'Login' || handleModalOpen === 'Register')
      setOpen(true);
  }, [handleModalOpen]);

  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: event => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const userData = Object.fromEntries(formData.entries());
          handleModalOpen === 'Login'
            ? dispatch(loginUser(userData))
            : dispatch(registerUser(userData));
          handleClose();
        },
      }}
    >
      <DialogTitle>
        {handleModalOpen === 'Register' ? 'Register Form' : 'Login Form'}
      </DialogTitle>
      <DialogContent>
        <FormControl size="medium" className="modalForm">
          {handleModalOpen === 'Register' && (
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
          )}
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
        {handleModalOpen === 'Register' ? (
          <Button type="submit">Register</Button>
        ) : (
          <Button type="submit">Login</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
