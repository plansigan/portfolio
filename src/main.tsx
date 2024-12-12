import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material';
import theme from './styling/theme'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
