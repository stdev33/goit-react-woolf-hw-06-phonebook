import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label htmlFor={numberInputId} className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
