import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <BrowserRouter basename="/react-homework-template">
      {/* <PersistGate> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);