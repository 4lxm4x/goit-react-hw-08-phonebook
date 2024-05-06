import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { registerReducer } from './slices/authSlice';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authReducer } from '../redux/slices/authSlice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whiteList: ['token', 'name'],
// };
// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   persistedReducer,
// });

export const store = configureStore({
  reducer,
});

export const persistor = persistStore(store);
