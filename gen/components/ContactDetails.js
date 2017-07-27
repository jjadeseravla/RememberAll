import React from 'react';
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
            { this.listTags(this.state.contact) }
            {"\n"}
          </Text>
          <Text style={styles.tagtext}>
            { this.state.contact.tags[0].name }
          </Text>
          <Button
            ref={this.props.generateTestHook('ContactDetails.EditButton')}
            title='Edit contact'
            onPress={this.navigateToEdit.bind(this)}
          />
          <Button
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
