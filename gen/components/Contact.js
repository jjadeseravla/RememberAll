import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { hook } from 'cavy';

class Contact extends React.Component {
  constructor(){
    super()
    this.openContact = this.openContact.bind(this)
   }
  openContact() {
    this.props.navigation.navigate('Details', {contact: this.props.contact})
  }

  render() {
    return (
      <TouchableHighlight
        ref={this.props.generateTestHook(`Contact.${this.props.contact.name}`)}
        onPress={this.openContact}
      >
        <Text>
          {this.props.contact.name}
        </Text>
      </TouchableHighlight>
    )
  };
};

export default hook(Contact);
