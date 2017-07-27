import React from 'react';
import { Text, View } from 'react-native';

import { hook } from 'cavy';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.navigation.state.params.contact}
  }
  render() {
    return (
      <View ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}`)}>
        <Text>
          { this.state.contact.name }
          { this.state.contact.tags[0].name }
        </Text>
      </View>
    )
  };
};

export default hook(ContactDetails);
