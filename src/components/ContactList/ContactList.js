import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';
import classes from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={classes.container}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={classes.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={classes.button}
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <div>Nothing found</div>
      )}
    </ul>
  );
};
