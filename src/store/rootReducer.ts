import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from '@components/ToDoList/todoReducer';
import linksReducer from '@components/UserLinks/linksReducer';
import articlesReducer from '@components/Articles/articlesReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  links: linksReducer,
  articles: articlesReducer
});

export default rootReducer;
