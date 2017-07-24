import 'react-native';
import React from 'react';
import { expect } from 'chai';
import Contact from '../gen/components/Contact.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Contact', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Contact />
    );
  });

  it('Renders details of a contact', () => {
    const jsontree = renderer.create(<Contact />).toJSON();
    console.log(jsontree)
    expect(jsontree.type).to.equal('View')
    expect(jsontree.children[0].type).to.equal('View');
  });
});
