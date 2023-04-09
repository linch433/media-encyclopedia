import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import 'antd/dist/reset.css';
import {theme} from "./theme.js";
import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ConfigProvider theme={theme}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </ConfigProvider>
    </BrowserRouter>
)
