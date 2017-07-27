import React from 'react';
import { Button, Text, View } from 'react-native';

import { hook } from 'cavy';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.navigation.state.params.contact}
  }

  navigateToEdit() {
    this.props.navigation.navigate('EditContact', {contact: this.state.contact})
  }

  navigateToHome() {
    this.props.navigation.navigate('Contacts')
  }

  listTags(contact) {
    const tagsList = []
    for (let index = 0, length = contact.tags.length; index<length; index++) {
      tagsList.push(contact.tags[index].name + ' ')
     }
    return tagsList
  };

  render() {
    return (
      <View ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}`)}>
        <Text>
          { this.state.contact.name }
          { this.listTags(this.state.contact) }
        </Text>
        <Button
          ref={this.props.generateTestHook('ContactDetails.EditButton')}
          title='Edit contact'
          onPress={this.navigateToEdit.bind(this)}
        />
        <Button
          ref={this.props.generateTestHook('ContactDetails.HomeButton')}
          title='Home'
          onPress={this.navigateToHome.bind(this)}
        />
      </View>
    )
  };
};

export default hook(ContactDetails);
