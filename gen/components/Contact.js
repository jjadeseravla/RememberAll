import React, { Component } from 'react';
import { Text } from 'react-native';


class Contact extends Component {

  render() {
    console.log(this.props)
    return <Text>{this.props.name}</Text>
  };

};

export default Contact
