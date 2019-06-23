import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import Counter from './Counter';
import countReducer from './reducer'
import * as serviceWorker from './serviceWorker';

let store = createStore(countReducer)
// console.log(store)
ReactDOM.render(<App />, document.getElementById('root'));
const renderCount = () => {
  ReactDOM.render(<Counter 
    value={store.getState()} 
    onIncrement={() => {
      store.dispatch({type: 'INCREMENT'});
    }} 
    onDecrement={() => {
      store.dispatch({type: 'DECREMENT'});
    }} />, document.getElementById('redux'));
}
renderCount();
store.subscribe(() => {
  // console.log(store.getState());
  renderCount();
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
