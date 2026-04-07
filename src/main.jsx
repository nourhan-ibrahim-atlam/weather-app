import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Redux Toolkit
import { store } from './store.js';
import { Provider } from 'react-redux';

// import i18n (needs to be bundled ;)) 
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
