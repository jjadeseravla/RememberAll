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
import { Root } from './gen/navigation/router'
import AddContactSpec from './specs/AddContactSpec';
import SearchBarSpec from './specs/SearchBarSpec';
import ContactDetailsSpec from './specs/ContactDetailsSpec';
import ContactDetailsHasNarrativeSpec from './specs/ContactDetailsHasNarrativeSpec'

const testHookStore = new TestHookStore();


export default class RememberAll extends Component {
  render() {
    return (
      <Tester specs={[AddContactSpec, SearchBarSpec, ContactDetailsSpec, ContactDetailsHasNarrativeSpec]} store={testHookStore} waitTime={1000} startDelay={1000}>
        <Root />
      </Tester>
    );
  }
}

AppRegistry.registerComponent('RememberAll', () => RememberAll);
