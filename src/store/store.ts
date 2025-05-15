import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialGeneralState = {
  themeMode: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('lang') || 'en',
  isLogin: localStorage.getItem('auth-token') ? true : false,
};

const generalSlice = createSlice({
  name: 'generalStates',
  initialState: initialGeneralState,
  reducers: {
    toggleTheme(state) {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      state.themeMode = newTheme;
    },
    setLanguage(state, action) {
      const newLanguage = action.payload;
      localStorage.setItem('lang', newLanguage);
      state.language = newLanguage;
    },
    setisLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

const generalAction = generalSlice.actions;

const store = configureStore({
  reducer: {
    general: generalSlice.reducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;

export { store, generalAction };
