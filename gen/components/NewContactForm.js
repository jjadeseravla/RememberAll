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
    this.state = {nameText: 'Name', tagsText: 'Tag your Contact'}
    this.createNewContact = this.createNewContact.bind(this);
  }

  checkContactHasTag(tagEntry) {
    if (contact.tags.filtered(`name ==[c] "${tagEntry.name}"`)[0]){
      return
    } else {
      realm.write(() => {
        contact.tags.push(tagEntry)
      });
    }
  };


  addContactTag(tagName) {
    const tagEntry = realm.objects('Tag').filtered(`name ==[c] "${tagName}"`)[0]
    if (tagEntry) {
      this.checkContactHasTag(tagEntry)
    } else {
      realm.write(() => {
        contact.tags.push(realm.create('Tag', {name: tagName}))
      });
    };
  };

  createNewContact() {
    realm.write(() => {
      contact = realm.create('Contact', {name: this.state.nameText, role: this.state.role, organisation: this.state.organisation, context: this.state.context});
    });
    const tagNames = this.state.tagsText.split(',');
    for(let tagName of tagNames) {
      this.addContactTag(tagName)
    };
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(nameText) => this.setState({nameText})}
          ref={this.props.generateTestHook('NewContactForm.NameInput')}
          placeholder={this.state.nameText}
        />
        <TextInput
          onChangeText={(role) => this.setState({role})}
          ref={this.props.generateTestHook('NewContactForm.RoleInput')}
          placeholder='Role'
        />
        <TextInput
          onChangeText={(organisation) => this.setState({organisation})}
          ref={this.props.generateTestHook('NewContactForm.OrganisationInput')}
          placeholder='Organisation'
        />
        <TextInput
          onChangeText={(context) => this.setState({context})}
          ref={this.props.generateTestHook('NewContactForm.ContextInput')}
          placeholder='Context'
        />
        <TextInput
          onChangeText={(tagsText) => this.setState({tagsText})}
          ref={this.props.generateTestHook('NewContactForm.TagsInput')}
          placeholder={this.state.tagsText}
        />
        <Button
          onPress={this.createNewContact}
          ref={this.props.generateTestHook('NewContactForm.Button')}
          title='Add new contact'
        />
      </View>
    )
  }
}

export default hook(NewContactForm)
