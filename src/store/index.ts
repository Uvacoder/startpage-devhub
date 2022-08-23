import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/ToDoList/todoReducer';
import linksReducer from '../components/UserLinks/linksReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  links: linksReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
