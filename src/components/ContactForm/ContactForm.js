import React, { useState } from 'react';
import classes from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const result = addContact(formData);
    if (!result) {
      return;
    }
    setFormData({ name: '', number: '' });
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
