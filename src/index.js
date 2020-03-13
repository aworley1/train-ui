import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trains from './Trains'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Trains />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
