import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);