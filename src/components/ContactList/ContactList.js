import React from 'react';
import classes from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul className={classes.container}>
    {contacts.map(contact => (
      <li className={classes.item} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={classes.button}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
