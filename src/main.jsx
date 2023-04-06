import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import 'antd/dist/reset.css';
import {theme} from "./theme.js";
import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <App/>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
