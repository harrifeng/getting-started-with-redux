var Redux = require('redux');
var ReactDOM = require('react-dom');
var React = require('react');

const counter = (state  = 0, action) =>{
  switch(action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
      return state;
  }
}

const { createStore } = Redux;
const  store = createStore(counter);

// const Counter = () => (
//   <div>Hello</div>
// );
const render = () => {
  ReactDOM.render(
    <div>Hello,World</div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
