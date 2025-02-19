import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CursorProvider } from './Components/Context/CustomCursor';
import { RevealTextProvider } from './Components/Context/RevealText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Both providers should wrap the App component */}
    <BrowserRouter>
    <RevealTextProvider>
    <CursorProvider>
        <App />
    </CursorProvider>
    </RevealTextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
