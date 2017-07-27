import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { hook } from 'cavy';

class SearchBar extends React.Component {

  handleTextChange(text) {
    this.props.onChangeText(text)
  }

  render() {
    return (
      <View>
        <TextInput style={styles.words}
          ref={this.props.generateTestHook('SearchBar.TextInput')}
          placeholder='SearchBar'
          onChangeText={(text) => this.handleTextChange(text)}
        />
      </View>
    )
  };
};

const styles = StyleSheet.create({
  words: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Euphemia UCAS',
  },
});

export default hook(SearchBar);
