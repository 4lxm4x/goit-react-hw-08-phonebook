import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
