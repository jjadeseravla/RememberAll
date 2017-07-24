import React from 'react';
import { View, TextInput } from 'react-native';

import { hook } from 'cavy';

class SearchBar extends React.Component {

  render() {
    return (
      <View>
        <TextInput />
      </View>
    )
  };
};

export default hook(SearchBar);
