import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import userReducer from './User/UserSlice';
import rootReducers from './reducer';

// Redux Toolkit Store
export const toolkitStore = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Traditional Redux Store
const traditionalStore = createStore(rootReducers);

export default traditionalStore;
