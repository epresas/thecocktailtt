import React from 'react'
import { render } from 'react-dom';
import './index.scss';

import App from './components/App';

const renderApp = () => (
  <App />
);
const root = document.getElementById('root');

render(renderApp(), root);
