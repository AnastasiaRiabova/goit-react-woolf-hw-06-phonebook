import React from 'react';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import classes from './App.module.css';
import { getContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={classes.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        'No contacts added'
      )}
    </div>
  );
};

export default App;
