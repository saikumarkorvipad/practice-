import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Sai from './Sai';



const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//     root.render(< App />);
// }, 1000);
// root.render(< App />);
root.render(
    <div>
        <Sai />
        <App />
    </div>);