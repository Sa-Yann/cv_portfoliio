import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    // the user is gonna have a userSlice call that is gonna get pulled  out by the userReducer
    user: useReducer,
  },
});
