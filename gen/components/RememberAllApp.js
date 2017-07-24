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
import WelcomeHeader from './WelcomeHeader';

import { hook } from 'cavy';


class RememberAllApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { refreshing: false }
  }
  renderScene(route, navigator) {
    switch (route.name) {
      case 'contacts-list':
        return <ContactsList navigator={navigator}>
      case 'details':
        return <ContactsDetails navigator={navigator} data={route.data}>
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'contacts-list', title: 'Contacts List'}}
        renderScene={this.renderScene}
        >
        <View style={styles.container}>

          <WelcomeHeader />
          <NewContactForm />
          <ContactsList />
        </View>
      </Navigator>
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
