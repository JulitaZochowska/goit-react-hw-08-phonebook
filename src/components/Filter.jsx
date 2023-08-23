import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterValue = event => dispatch(setFilter(event.target.value));

  return (
    <div>
      <label>Find contacts by name</label>
      <br />
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={setFilterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
