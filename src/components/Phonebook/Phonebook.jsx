import React, { useState } from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from 'components/ContactsForm/Contactform';
import ContactFilter from 'components/Filtering/Filter';

function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const addContact = newContact => {
    setContacts([...contacts, newContact]);
    setFilteredContacts([...filteredContacts, newContact]);
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilteredContacts(filteredContacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <ContactsForm contacts={contacts} onAddContact={addContact} />

      <div className={styles.phonebookContainer}>
        <div className={styles.title}>
          <h2>Contacts List</h2>
          <ContactFilter
            contacts={contacts}
            setFilteredContacts={setFilteredContacts}
          />
        </div>

        <ul className={styles.phonebookList}>
          {filteredContacts.map((contact, index) => (
            <li key={contact.id}>
              {' '}
              <div className={styles.ContactContainer}>
                {index + 1}. {contact.name}: {contact.number}{' '}
                <button
                  onClick={() => removeContact(contact.id)}
                  type="button"
                  className={styles.buttonContact}
                >
                  Remove
                </button>
              </div>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Phonebook;
