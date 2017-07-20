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
const testHookStore = new TestHookStore();


export default class RememberAll extends Component {
  render() {
    return (
      <Tester specs={[AddContactSpec]} store={testHookStore}>
        <RememberAllApp />
      </Tester>
    );
  }
}

AppRegistry.registerComponent('RememberAll', () => RememberAll);
