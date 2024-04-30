import { combineReducers } from 'redux';
import { contactsReducer } from '../slices/contactsSlice';
import { filterReducer } from '../slices/filterSlice';
import { registerReducer } from '../slices/authSlice';
export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  register: registerReducer,
});
