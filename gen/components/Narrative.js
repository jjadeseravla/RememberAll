import React from 'react';
import { View, Text } from 'react-native';

import { hook } from 'cavy';

class Narrative extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.contact}
  }

  createNewNarrative(contact) {
    return (
      `This is ${this.state.contact.name}, who is a ${this.state.contact.role} at ${this.state.contact.organisation}. You met at ${this.state.contact.context}.`
    )
  };

  render() {
    return(
      <Text ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}.Narrative`)}>
        'I am a narrative without an apostrophe'
      </Text>
    )
  }
};

export default hook(Narrative);
