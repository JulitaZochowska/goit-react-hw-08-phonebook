import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducers';
import { contactsReducer } from './slice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
