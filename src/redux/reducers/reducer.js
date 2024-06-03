import { combineReducers } from 'redux';
import { contactsReducer } from '../slices/contactsSlice';
import { filterReducer } from '../slices/filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../slices/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
