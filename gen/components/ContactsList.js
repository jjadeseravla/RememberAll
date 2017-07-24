import React from 'react';
import { Text, View } from 'react-native';
import Contact from './Contact'

class ContactsList extends React.Component {
  renderContacts() {
    return this.props.contacts.map((contact, i) =>
      <Contact
        name={contact.name}
        key={`contact#${i}`}
      />
    )
  }

  render() {
    return <View>{this.renderContacts()}</View>
  };
};

export default ContactsList
