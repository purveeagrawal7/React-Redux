import React from 'react';
import ReactDOM, { Component } from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './counter.js';
import { createStore } from 'redux'
import CounterDecrement from './DecrementCounter.js';

const initialState = {
	count1: 0,
	count2: 0
};

function reducer(state=initialState,action){
	console.log("action",action)
	switch(action.type){
		case 'INCREMENT':
		return	Object.assign({}, state,{count1:state.count1+1});
		case 'DECREMENT':
		return	Object.assign({}, state,{count2:state.count2-1});
		default:
			return state;
	}
	return state;
}

const store = createStore(reducer);

class App extends React.Component {
	render(){
		console.log("store",store)
		 return (
    <div>
      <p>React here!</p>
    <Counter />
    <CounterDecrement/>
    </div>
  );
	}
 
};
ReactDOM.render(
<Provider store={store}>
    <App />
      </Provider>, 
  document.getElementById('app'));