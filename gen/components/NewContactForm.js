import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View
} from 'react-native';
// import { hook } from 'cavy';

class NewContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: 'Input Contact Info'}
  }

  addContact() {

  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          // ref={this.props.generateTestHook('NewContactForm.TextInput')}
          value={this.state.text}
        />
        <Button
          onPress={this.addContact}
          // ref={this.props.generateTestHook('NewContactForm.Button')}
          title='Add new contact'
          // accessibilityLabel='Add contact button'
        />
      </View>
    )
  }
}

// export default hook(NewContactForm)
export default NewContactForm
