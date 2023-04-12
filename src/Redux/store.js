import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authSlice } from './auth/auth-silce';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: authSlice.reducer,
  },
});
