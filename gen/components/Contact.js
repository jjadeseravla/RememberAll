import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

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
        <Text style={styles.smalltext}>
          {this.props.contact.name}
        </Text>
      </TouchableHighlight>
    )
  };
};

const styles = StyleSheet.create({
  smalltext: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});


export default hook(Contact);
