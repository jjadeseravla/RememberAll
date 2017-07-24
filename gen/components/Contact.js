import React, { Component } from 'react';
import { Text } from 'react-native';

import { hook } from 'cavy';

class Contact extends Component {

  render() {
    return (
        <Text ref={this.props.generateTestHook(`ContactEntry.${this.props.name}`)}>
          {this.props.name}
        </Text>
    )
  };
};

export default hook(Contact);
