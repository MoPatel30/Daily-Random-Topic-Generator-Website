import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Topic, TopicName } from './App';
import * as serviceWorker from './serviceWorker';
import {Randomizer} from './randomizer';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<TopicName />, document.getElementById('topic-name-section'))

ReactDOM.render(<Randomizer />, document.getElementById('randomizer-button'))

ReactDOM.render(<Topic />, document.getElementById('topic-section'));











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
