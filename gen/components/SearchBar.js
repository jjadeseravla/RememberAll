import React from 'react';
import { View, TextInput } from 'react-native';

import { hook } from 'cavy';

class SearchBar extends React.Component {

  handleTextChange(text) {
    this.props.onChangeText(text)
  }

  render() {
    return (
      <View>
        <TextInput
          ref={this.props.generateTestHook('SearchBar.TextInput')}
          placeholder='SearchBar'
          onChangeText={(text) => this.handleTextChange(text)}
        />
      </View>
    )
  };
};

export default hook(SearchBar);
