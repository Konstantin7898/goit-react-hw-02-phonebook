import React, { Component } from 'react';
import { InputForm } from '../components/InputForm/InputForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    data.id = nanoid();
  };

  render() {
    return (
      <section>
        <h3>Phonebook</h3>
        <InputForm onSubmit={this.formSubmitHandler} />
      </section>
    );
  }
}
