import React from 'react';

import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);
