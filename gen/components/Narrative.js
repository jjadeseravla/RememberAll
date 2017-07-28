import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { hook } from 'cavy';

class Narrative extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.contact}
  }


  render() {
    if (this.state.contact.name === 'Name') {
      return(
        <Text style={styles.tagtext}>
          {`You met this person at ${this.state.contact.context}! They work at ${this.state.contact.organisation} as a ${this.state.contact.role}`}
        </Text>
      )
    }
    if (this.state.contact.role === null) {
      return(
        <Text style={styles.tagtext}>
          {`You met ${this.state.contact.name} who works at ${this.state.contact.organisation} and you met them at ${this.state.contact.context}.`}
        </Text>
      )
    }
    if (this.state.contact.organisation === null) {
      return(
        <Text style={styles.tagtext}>
          {`This is ${this.state.contact.name}, a ${this.state.contact.role} whom you met ${this.state.contact.context}`}
        </Text>
      )
    }
    if (this.state.contact.context === null) {
      return(
        <Text style={styles.tagtext}>
          {`This is ${this.state.contact.name}, a ${this.state.contact.role} whom you works ${this.state.contact.organisation}`}
        </Text>
      )
    }
    return(
      <View ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}.Narrative`)}>
        <Text style={styles.tagtext}>
          {`This is ${this.state.contact.name}, a ${this.state.contact.role} who works at ${this.state.contact.organisation}. You met ${this.state.contact.name} at ${this.state.contact.context}!`}
        </Text>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  tagtext: {
    color: '#43d8ae',
    fontSize: 15,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  smalltext: {
    color: '#43d8ae',
    fontSize: 20,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});

export default hook(Narrative);
