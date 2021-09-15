import { createSlice } from '@reduxjs/toolkit';


//  in the userslice we strore the user Info
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // we work on the Login so we state that the user doesn texist at start
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; 
    }, 
  },
});

export const { login, logout } = userSlice.actions;

// The function selectUser below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// We wonna pull the user variable from the userSlice
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
