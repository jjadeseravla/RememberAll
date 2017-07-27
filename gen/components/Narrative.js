import React from 'react';
import { View, Text } from 'react-native';

import { hook } from 'cavy';

class Narrative extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.contact}
  }


  render() {
    if (this.state.contact.name === 'Name') {
      return(
        <Text>
          {`You met this person at ${this.state.contact.context}! They work at ${this.state.contact.organisation} as a ${this.state.contact.role}`}
        </Text>
      )
    }
    if (this.state.contact.role === null) {
      return(
        <Text>
          {`You met ${this.state.contact.name} who works at ${this.state.contact.organisation} and you met them at ${this.state.contact.context}.`}
        </Text>
      )
    }
    if (this.state.contact.organisation === null) {
      return(
        <Text>
          {`This is ${this.state.contact.name}, a ${this.state.contact.role} whom you met ${this.state.contact.context}`}
        </Text>
      )
    }
    return(
      <View ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}.Narrative`)}>
        <Text >
          {`This is ${this.state.contact.name}, a ${this.state.contact.role} who works at ${this.state.contact.organisation}. You met ${this.state.contact.name} at ${this.state.contact.context}!`}
        </Text>
      </View>
    )
  };
};

export default hook(Narrative);
