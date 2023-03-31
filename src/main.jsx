import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22223b',
    },
    secondary: {
      main: '#4a4e69',
    },
    tertiary: {
      main: '#9a8c98',
    },
    quaternary: {
      main: '#c9ada7',
    },
    background: {
      default: '#f2e9e4',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
