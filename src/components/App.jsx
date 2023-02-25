import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle } from './MainTitle/MainTitle';
import { Subtitle } from './Subtitle/Subtitle';
import { Container } from './Container/Container.styled';
import storage from 'utils/handlers/storage';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.loadFromLS('contacts-list') ?? [];
    this.setState({ contacts: savedContacts });
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.saveToLS('contacts-list', contacts);
    }
  }

  addContact = contact => {
    const isExist = this.state.contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => ({
      contacts: [finalContact, ...prevState.contacts],
    }));
  };

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
    return (
      <Container className="container">
        <MainTitle title="Phonebook" />
        <ContactForm onAddContact={this.addContact} />
        <Subtitle subtitle="Contacts" />
        <Filter onFilterChange={this.handleFilter} valueToFilter={filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}