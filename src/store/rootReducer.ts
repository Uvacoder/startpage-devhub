import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from '@components/ToDoList/todoReducer';
import linksReducer from '@components/UserLinks/linksReducer';
import articlesReducer from '@components/Articles/articlesReducer';
import interestsReducer from '@components/Articles/interestsReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  links: linksReducer,
  interests: interestsReducer,
  articles: articlesReducer
});

export default rootReducer;
