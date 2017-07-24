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
    this.state = {nameText: 'Input Contact Info', tagsText: 'Tag your Contact'}
    this.createNewContact = this.createNewContact.bind(this);
  }

  createNewContact() {
    realm.write(() => {
      contact = realm.create('Contact', {name: this.state.nameText});
    });
    const tags = this.state.tagsText.split(',');
    for(let tag of tags) {
      realm.write(() => {
        contact.tags.push(realm.create('Tag', {name: tag}))
      })
    };
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(nameText) => this.setState({nameText})}
          ref={this.props.generateTestHook('NewContactForm.NameInput')}
          value={this.state.nameText}
        />
        <TextInput
          onChangeText={(tagsText) => this.setState({tagsText})}
          ref={this.props.generateTestHook('NewContactForm.TagsInput')}
          value={this.state.tagsText}
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
