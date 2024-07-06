import './app/globals.css';

import ReactDOM from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

import('@/mocks/browser').then((module) => {
  module.worker.start().then(() => {
    root.render(<App />);
  });
});
