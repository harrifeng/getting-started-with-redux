var Redux = require('redux')
var ReactDOM = require('react-dom')
var React = require('react')

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const {createStore} = Redux
const store = createStore(counter)

const Counter = ({
                   value,
                   onIncrement,
                   onDecrement
                 }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({type: 'INCREMENT'})
      }
      onDecrement={() =>
        store.dispatch({type: 'DECREMENT'})
      }
    >
    </Counter>,
    document.getElementById('root')
  )
}
// add render as one of listeners
// all the listeners will be called in dispatch()
store.subscribe(render)
render()
