import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';


//this is a reducer takes the state and an action and creates or updates then
//returns a todo
const todo = (state, action)=>{
  switch (action.type){
    case 'ADD_TODO':
      return {
          id: action.id,
          text: action.text,
          completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state, completed : !state.completed
      };
    default:
      return state;
  }
}


//this is a reducer that takes the current state and
//an action as parameters, and returns the new state
export const todos = (state = [], action)=>{
  switch (action.type){
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type){
    case 'SET_VISABILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const todoApp = (state = {}, action)=>{
  return {
    todos : todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter,action)
  };
};

export const store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
