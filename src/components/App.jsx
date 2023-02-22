import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormContacts } from './FormContacts';
import { FilterContacts } from './FilterContacts';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = e => {
    e.preventDefault();

    this.setState(({ contacts }) => {
      const chackAddContact = contacts
        .map(cont => cont.name)
        .includes(e.target.name.value);

      if (chackAddContact) {
        alert(`${e.target.name.value} is already in contacts`);
      } else {
        const contact = {
          id: nanoid(),
          name: e.target.name.value,
          number: e.target.number.value,
        };
        return {
          contacts: [...contacts, contact],
        };
      }
    });
  };

  filterContacts = e => {
    console.log(e.target);
    this.setState({
      filter: e.target.value,
    });
  };

  onDeleteHandler = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          height: '100%',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 35,
          color: '#010101',
          marginLeft: 20,
        }}
      >
        <h1>Phonebook</h1>
        <FormContacts onSubmitHandler={this.submitHandler} />
        <h2>Contacts</h2>
        <FilterContacts filterContacts={this.filterContacts} />
        <ContactsList
          id={nanoid()}
          onDeleteHandler={this.onDeleteHandler}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}
