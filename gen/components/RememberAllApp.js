import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import ContactsList from './ContactsList';
import NewContactForm from './NewContactForm';
import WelcomeHeader from './WelcomeHeader';

import { hook } from 'cavy';

import realm from '../models/realm'

class RememberAllApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { refreshing: false }
    realm.addListener('change', () => {
      this.setState({ refreshing: true })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <WelcomeHeader />
        <NewContactForm />
        <ContactsList contacts={realm.objects('Contact')}/>
      </View>
    );
  }
}

export default hook(RememberAllApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
