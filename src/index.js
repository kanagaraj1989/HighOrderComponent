import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ConsoleLoggerComponent from './ConsoleLogger/ConsoleLoggerComponent'
import  ToDoComponent from './ToDoList/ToDoComponent'

// ReactDOM.render(<ConsoleLoggerComponent />,  document.getElementById('root'));
ReactDOM.render(<ToDoComponent />,  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
