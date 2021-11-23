import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IKContext } from 'imagekitio-react'
import { authenticationEndpoint, publicKey, urlEndpoint } from './api';
import { StatusProvider } from './StatusContext';

ReactDOM.render(
  <React.StrictMode>
    <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey} authenticationEndpoint={authenticationEndpoint}>
      <StatusProvider>
        <App />
      </StatusProvider>
    </IKContext>
  </React.StrictMode>,
  document.getElementById('root')
);

