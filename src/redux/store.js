import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './slices/authSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whiteList: ['token'],
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

// // export const store = configureStore({
// //   persistedReducer,
// // });

// export const store = () => {
//   const store = configureStore({
//     reducer: {
//       auth: persistReducer(persistConfig, authReducer),
//       reducer,
//     },
//   });
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export const store = configureStore({
//   reducer: {
//     reducer,
//     registerReducer,
//   },
// });

export const store = configureStore({
  reducer,
});
