import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Terminal from './components/terminal';
import '../style.css';

const App = () => {
    return (
        <Terminal/>
    );
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);