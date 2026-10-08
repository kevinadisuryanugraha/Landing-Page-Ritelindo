import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'lenis/dist/lenis.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register PWA Service Worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('PWA ServiceWorker registered with scope: ', reg.scope);
      })
      .catch((err) => {
        console.warn('PWA ServiceWorker registration failed: ', err);
      });
  });
}
