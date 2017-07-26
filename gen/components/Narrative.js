import React from 'react';
import { View, Text } from 'react-native';

import { hook } from 'cavy';

class Narrative extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.contact}
  }

  render() {
    return(
      <Text ref={this.props.generateTestHook(`ContactDetails.${this.state.contact}.Narrative`)}>
        {`This is ${this.state.contact.name}, a ${this.state.contact.role} who works at ${this.state.contact.organisation}. You met ${this.state.contact.name} at ${this.state.contact.context}! You think that ${this.state.contact.name} is ${this.state.contact.tags[0].name}.`}
      </Text>
    )
  }
};

export default hook(Narrative);
