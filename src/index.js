import React, { Suspense } from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n'; // needed for bundling
import './index.scss'

import App from './components/App';

const app =  (
  <Suspense fallback="loading...">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
const root = document.getElementById('root');

render( <React.StrictMode>{app}</React.StrictMode>, root);
