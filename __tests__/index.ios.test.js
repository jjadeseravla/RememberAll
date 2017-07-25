import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('Linking', () => {

  // we need to mock both Linking.getInitialURL()
  // and Linking.getInitialURL().then()
  const getInitialURL = jest.fn()
  getInitialURL.mockReturnValueOnce({then: jest.fn()})

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: getInitialURL
  }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );


});
