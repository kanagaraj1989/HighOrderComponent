import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ConsoleLoggerComponent from './ConsoleLogger/ConsoleLoggerComponent'
import  ToDoComponent from './ToDoList/ToDoComponent'
//import StateTestAppComponent from './StateTest/StateTestComponent'
import StateComponent from './StateTest/StateComponent'
import CurrencyConverter from './RenderPropsPattern/CurrencyConverter'
import AmountHocTest from './RenderPropsPattern/AmountHocTest'

ReactDOM.render(<AmountHocTest />, document.getElementById('root'))
//ReactDOM.render(<CurrencyConverter />, document.getElementById('root'))
//ReactDOM.render(<StateComponent />, document.getElementById('root'))
//ReactDOM.render(<StateTestAppComponent />,  document.getElementById('root'));
// ReactDOM.render(<ConsoleLoggerComponent />,  document.getElementById('root'));
//ReactDOM.render(<ToDoComponent />,  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
