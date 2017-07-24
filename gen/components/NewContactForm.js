import React from 'react';
import {
  Button,
  TextInput,
  View
} from 'react-native';
import { hook } from 'cavy';
import realm from '../models/realm'

class NewContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: 'Input Contact Info'}
    this.createNewContact = this.createNewContact.bind(this);
  }

  createNewContact() {
    realm.write(() => {
      realm.create('Contact', {name: this.state.text});
    });
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          ref={this.props.generateTestHook('NewContactForm.TextInput')}
          placeholder={this.state.text}
        />
        <Button
          onPress={this.createNewContact}
          ref={this.props.generateTestHook('NewContactForm.Button')}
          title='Add new contact'
          // accessibilityLabel='Add contact button'
        />
      </View>
    )
  }
}

export default hook(NewContactForm)
