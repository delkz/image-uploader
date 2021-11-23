import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IKContext } from 'imagekitio-react'
import { urlEndpoint } from './api';

ReactDOM.render(
  <React.StrictMode>
    <IKContext urlEndpoint={urlEndpoint}>
      <App />
    </IKContext>
  </React.StrictMode>,
  document.getElementById('root')
);

