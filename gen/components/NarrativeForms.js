import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { hook } from 'cavy';

class NarrativeForms extends React.Component {

  render() {
    return (
      <View>
        <TextInput
          placeholder='Role'
        />
        <TextInput
          placeholder='Organisation'
        />
        <TextInput
          placeholder='Context'
        />
        <Button
          onPress={this.createNewContact}
          ref={this.props.generateTestHook('NarrativeForm.Button')}
          title='Submit'
        />
      </View>
    )
  }

};

export default hook(NarrativeForms);
