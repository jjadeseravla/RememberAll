import 'react-native';
import React from 'react';
import { expect } from 'chai';
import SearchBar from '../gen/components/SearchBar.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('SearchBar', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <SearchBar />
    );
  });

  it('Renders a text input', () => {
    const jsontree = renderer.create(<SearchBar />).toJSON();
    expect(jsontree.children[0].type).to.equal('TextInput');
  });
});
