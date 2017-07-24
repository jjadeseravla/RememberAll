/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tester, TestHookStore } from 'cavy';
import RememberAllApp from './gen/components/RememberAllApp'
import AddContactSpec from './specs/AddContactSpec';
import SearchBarSpec from './specs/SearchBarSpec';
import ContactDetailsSpec from './specs/ContactDetailsSpec';
const testHookStore = new TestHookStore();


export default class RememberAll extends Component {
  render() {
    return (
      <Tester specs={[AddContactSpec, SearchBarSpec, ContactDetailsSpec]} store={testHookStore} waitTime={2000} startDelay={3000}>
        <RememberAllApp />
      </Tester>
    );
  }
}

AppRegistry.registerComponent('RememberAll', () => RememberAll);
