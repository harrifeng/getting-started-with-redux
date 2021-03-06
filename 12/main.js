const expect = require('expect');

const deepFreeze = require('deep-freeze');


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, { completed: !todo.completed });
      });
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    { id: 1,
      text: 'Use Redux',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
    text: 'Use Redux'
  };
  const stateAfter = [
    {
      id: 1,
      text: 'Use Redux',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};


testAddTodo();
testToggleTodo();
