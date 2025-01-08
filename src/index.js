import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from "./Components/Context/DarkMode";
import { CursorProvider } from './Components/Context/CustomCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Both providers should wrap the App component */}
    <BrowserRouter>
    <CursorProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </CursorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
