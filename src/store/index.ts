import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/ToDoList/todoReducer';
import linksReducer from '../components/UserLinks/linksReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  todos: todoReducer,
  links: linksReducer
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
