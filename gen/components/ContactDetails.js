import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { hook } from 'cavy';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.navigation.state.params.contact}
  }
  render() {
    return (
      <View style={styles.container2}>
        <View style={styles.container} ref={this.props.generateTestHook(`ContactDetails.${this.state.contact.name}`)}>
          <Text style={styles.smalltext}>
            {`What do you`}
            {"\n"}
            {` know about`}
          </Text>
          <Text style={styles.words}>
            { this.state.contact.name }?
            {"\n"}
          </Text>
          <Text style={styles.tagtext}>
            { this.state.contact.tags[0].name }
          </Text>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  words: {
    color: '#43d8ae',
    fontSize: 35,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
  },
  tagtext: {
    color: '#43d8ae',
    fontSize: 25,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
  },
  smalltext: {
    color: '#43d8ae',
    fontSize: 20,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 5,
    // borderColor: 'black'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 5,
    // borderColor: 'black'
  },
});


export default hook(ContactDetails);
