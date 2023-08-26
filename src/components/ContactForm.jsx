import React, { useState } from 'react';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

import Button from '@mui/material/Button';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name: contact.name, number: contact.number }));

    // zresetuje cały formularz po wysłaniu
    setContact(prev => ({ ...INITIAL_STATE }));
    //albo do resetu
    //const form =event.target;
    //form.reset()
  };

  // zeby mona bylo zmienić wartość inputa
  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="enter name"
        value={contact.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        placeholder="enter number"
        value={contact.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button variant="contained" className={css.button} type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
