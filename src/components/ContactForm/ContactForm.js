import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import classes from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const allContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const isAlreadyInContacts = allContacts.some(
      contact =>
        contact.name.toLowerCase().trim() === formData.name.toLowerCase().trim()
    );

    if (isAlreadyInContacts) {
      return alert(`${formData.name} is already in contacts`);
    }
    dispatch(addContact(formData));
    setFormData(initialState);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <input
        className={classes.input}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        pattern="[A-Za-zА-Яа-яЁёҐґІіЇїЄє \s' \-]*"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        className={classes.input}
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
        pattern="\+[0-9 \s \-]*"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
