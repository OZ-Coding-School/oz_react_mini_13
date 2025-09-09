import { configureStore, createSlice } from '@reduxjs/toolkit';

export const isDarkmodeSlice = createSlice({
  name: 'isDarkMode',
  initialState: 'false',
  reducers: {
    setDarkMode(state, action) {
      return (state = action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    setDarkMode: isDarkmodeSlice.reducer,
  },
});
