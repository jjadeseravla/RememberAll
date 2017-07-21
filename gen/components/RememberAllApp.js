import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import ContactsList from './ContactsList';
import NewContactForm from './NewContactForm';
import Realm from 'realm'

// import { hook } from 'cavy';

let realm = new Realm({
  schema: [{
    name: 'Contact', properties: {
      name: 'string'
    }
  }]
});

class RememberAllApp extends React.Component {

  refreshContent() {
    this.render()
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to our Awesome App!
        </Text>
        <NewContactForm onSubmit={this.refreshContent}/>
        <ContactsList contacts={realm.objects('Contact')}/>
      </View>
    );
  }
}

// const TestableApp = hook(RememberAllApp);

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

// export default TestableApp;
export default RememberAllApp
