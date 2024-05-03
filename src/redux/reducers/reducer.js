import { combineReducers } from 'redux';
import { contactsReducer } from '../slices/contactsSlice';
import { filterReducer } from '../slices/filterSlice';
import { authReducer } from '../slices/authSlice';
// import { loginReducer } from '../slices/authSlice';
export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
  // login: loginReducer,
});
