import React, { useState } from 'react';
import styles from './Contactform.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function ContactsForm({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = () => {
    
    if (!name.trim() || !number.trim()) {
      alert('Please fill in both name and phone number.');
      return;
    }

    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
      alert(`Contact with name '${name}' already exists.`);
      return;
    }
  
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    
    onAddContact(newContact);

   
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.phonebookContainer}>
      <div className={styles.phonebookTitle}>
        <h2>Phonebook</h2>
      </div>
      <p className={styles.title}>Name</p>
      <input
        className={styles.inputText}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
        required // This makes the field required
      />

      <p className={styles.title}>Phone Number</p>
      <input
        className={styles.inputText}
        type="tel"
        name="phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Enter your phone number"
        required // This makes the field required
      />
      <button onClick={addContact} className={styles.buttonContact} type="button">
        Add contact
      </button>
    </div>
  );
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
