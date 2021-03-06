import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './m1-ui/u1-app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(

        <BrowserRouter>
            <>
            <App/>
                </>
        </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your u1-app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
