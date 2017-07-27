import React from 'react';
import Narrative from './Narrative'
import { Button, Text, View, StyleSheet } from 'react-native';

import { hook } from 'cavy';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {contact: this.props.navigation.state.params.contact}
  }

  navigateToEdit() {
    this.props.navigation.navigate('EditContact', {contact: this.state.contact})
  }

  navigateToHome() {
    this.props.navigation.navigate('Contacts')
  }

  listTags(contact) {
    const tagsList = []
    for (let index = 0, length = contact.tags.length; index<length; index++) {
      tagsList.push(contact.tags[index].name + ' ')
     }
    return tagsList
  };

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
          <Narrative
          contact={ this.state.contact }
          />
          <Text style={styles.smalltext}>
          {"\n"}
          {`You also think this person is:`}
          </Text>
          <Text style={styles.tagtext}>
            { this.listTags(this.state.contact) }
            {"\n"}
          </Text>
          <Button
            color="#D38DCC"
            ref={this.props.generateTestHook('ContactDetails.EditButton')}
            title='Edit contact'
            onPress={this.navigateToEdit.bind(this)}
          />
          <Button
            color="#D38DCC"
            ref={this.props.generateTestHook('ContactDetails.HomeButton')}
            title='Home'
            onPress={this.navigateToHome.bind(this)}
          />
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
    textAlign: 'center'
  },
  tagtext: {
    color: '#43d8ae',
    fontSize: 17,
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
  container: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});


export default hook(ContactDetails);
