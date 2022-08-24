import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from '@components/ToDoList/todoReducer';
import linksReducer from '@components/UserLinks/linksReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  links: linksReducer
});

export default rootReducer;
