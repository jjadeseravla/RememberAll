import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import { hook } from 'cavy';

class Contact extends React.Component {

  showContactDetails() {
    this.props.navigator.push({name: 'details', data: this.props.data});
  }

  render() {
    return (
        <TouchableHighlight
          ref={this.props.generateTestHook(`ContactEntry.${this.props.data.name}`)}
          onPress={this.showContactDetails}
        >
          <View>
            <Text>
              {this.props.data.name}
            </Text>
          </View>
        </TouchableHighlight>
    )
  };
};

export default hook(Contact);
