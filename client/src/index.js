import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, NextUIProvider } from '@nextui-org/react'
import './css/index.css';
import App from './App';

const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: 'black',
      text: '#ffffff',
      myDarkColor: '#ff4ecd'
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={myDarkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);