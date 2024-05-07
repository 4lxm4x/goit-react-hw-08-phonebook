import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
// import { registerReducer } from './slices/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
