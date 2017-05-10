import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { todos } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds a todo sucessfully', ()=> {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);

});

it('toggles a todo sucessfully', ()=> {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
    id: 1,
    text: 'Go Shopping',
    completed: false
  }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
    id: 1,
    text: 'Go Shopping',
    completed: true
  }
];
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);

});
