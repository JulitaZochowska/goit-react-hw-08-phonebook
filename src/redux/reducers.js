import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

// Filtr jest niezalezny od zewnetrznego zrodla danych (API) wiec nie musimy nic z nim robic
// i nadal operujemy na lokalnym state
const filterInitial = '';
export const filterReducer = createReducer(filterInitial, {
  //setFilter-nazwa akcji
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
