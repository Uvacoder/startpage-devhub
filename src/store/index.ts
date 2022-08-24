import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';

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
