import React, { Component } from 'react';
import { InputForm } from '../components/InputForm/InputForm';
import { nanoid } from 'nanoid';
import { Filter } from '../components/Filter/Filter';
import { Contacts } from '../components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkContactAvailability = data => {
    const { contacts } = this.state;
    return contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    if (this.checkContactAvailability(data)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  onDelete = id => {
    const updatedContacts = this.state.contacts.filter(c => c.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <section>
        <h3>Phonebook</h3>
        <InputForm onSubmit={this.formSubmitHandler} />
        {this.state.contacts.length > 0 && <h3>Contacts</h3>}
        {this.state.contacts.length > 0 && (
          <Filter
            filterValue={this.state.filter}
            onFilterChange={this.changeFilter}
          />
        )}
        <Contacts contacts={visibleContacts} onDelete={this.onDelete} />
      </section>
    );
  }
}
