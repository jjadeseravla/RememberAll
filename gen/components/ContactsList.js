import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Contact from './Contact'

class ContactsList extends Component {

  renderContacts() {
    return this.props.contacts.map(contact =>
      <Contact
        name={contact.name}
      />
    )
  }

  render() {
    return <View>{this.renderContacts}</View>
  };

};

export default ContactsList
