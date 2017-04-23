import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = $;
require('bootstrap');
import './App.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);