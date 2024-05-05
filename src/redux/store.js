import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { registerReducer } from './slices/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['token'],
};
const persistedReducer = persistReducer(persistConfig, reducer.auth);

// export const store = configureStore({
//   persistedReducer,
// });

export const store = configureStore({
  persistedReducer,
});

export const persistor = persistStore(store);
