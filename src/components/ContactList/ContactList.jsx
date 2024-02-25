import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import ContactItem from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
