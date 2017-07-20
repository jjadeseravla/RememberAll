import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View
} from 'react-native';
// import Button from 'react-native-button';

class NewContactForm extends React.Component {
  constructor() {
    super()
    this.state = {text: 'Input Contact Info'}
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={this.addContact}
          title='Add new contact'
          // accessibilityLabel='Add contact button'
        />
      </View>
    )
  }
}

export default NewContactForm
