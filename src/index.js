import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ModalProvider } from "react-modal-hook";

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Con/>, document.getElementById('timeEntry'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
