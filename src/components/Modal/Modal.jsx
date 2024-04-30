import { FormControl } from '@mui/base/FormControl';
// import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Modal.css';
export default function RegisterForm() {
  return (
    <div class="modal">
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
    </div>
  );
}
