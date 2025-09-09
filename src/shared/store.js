import { configureStore, createSlice } from '@reduxjs/toolkit';

export const searchModeSlice = createSlice({
  name: 'searchMode',
  initialState: false,
  reducers: {
    setSearchMode: (_, { payload }) => payload,
    toggleSearchMode: (state) => !state,
    open: () => true,
    close: () => false,
  },
});
export const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: '',
  reducers: {
    setQuery: (_, { payload }) => payload,
    clearQuery: () => '',
  },
});

export const store = configureStore({
  reducer: {
    searchMode: searchModeSlice.reducer,
    searchQuery: searchQuerySlice.reducer,
  },
});
