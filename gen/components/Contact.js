import React, { Component } from 'react';
import { Text } from 'react-native';


class Contact extends Component {

  render() {
    return <Text>{this.props.contact.name}</Text>
  };

};

export default Contact
