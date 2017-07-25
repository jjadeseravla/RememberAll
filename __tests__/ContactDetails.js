import 'react-native';
import React from 'react';
import { expect } from 'chai';
import ContactDetails from '../gen/components/ContactDetails.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('ContactDetails', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <ContactDetails />
    );
  });

  it('Renders details of a contact', () => {
    const jsontree = renderer.create(<ContactDetails />).toJSON();
    expect(jsontree.children[0].type).to.equal('Text');
  });
});
