import React from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';
import { hook } from 'cavy';
import realm from '../models/realm'

class EditContactForm extends React.Component {
  constructor(props) {
    super(props)
    const contact = this.props.navigation.state.params.contact
    this.state = { contact: contact,
                   role: contact.role,
                   organisation: contact.organisation,
                   context: contact.context }
    this.updateContact = this.updateContact.bind(this);
  }

  updateContact() {
    realm.write(() => {
      const contact = realm.objects('Contact').filtered(`name = "${this.state.contact.name}"`)
      const updatedContact = realm.create('Contact', {
                                              name: this.state.contact.name,
                                              role: this.state.role,
                                              organisation: this.state.organisation,
                                              context: this.state.context
                                            },
                                          true)
    });
    Alert.alert(`Updated details for ${this.state.contact.name}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.smalltext}>
          {"\n"}
          {`Update `}
          {this.state.contact.name}
          {`'s details:`}
          {"\n"}
        </Text>
        <Text style={styles.tagtext}>
          Role:
        </Text>
        <TextInput
          onChangeText={(role) => this.setState({role})}
          ref={this.props.generateTestHook('EditContactForm.RoleInput')}
          value={this.state.role}
        />
        <Text style={styles.tagtext}>
          Organisation:
        </Text>
        <TextInput
          onChangeText={(organisation) => this.setState({organisation})}
          ref={this.props.generateTestHook('EditContactForm.OrganisationInput')}
          value={this.state.organisation}
        />
        <Text style={styles.tagtext}>
          Where you met:
        </Text>
        <TextInput
          onChangeText={(context) => this.setState({context})}
          ref={this.props.generateTestHook('EditContactForm.ContextInput')}
          value={this.state.context}
        />
        <Button color='white'
          onPress={this.updateContact}
          ref={this.props.generateTestHook('EditContactForm.Button')}
          title='Update contact details'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43d8ae',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  words: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  tagtext: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  smalltext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'normal',
    textAlign: 'center'
  },
});


export default hook(EditContactForm)
