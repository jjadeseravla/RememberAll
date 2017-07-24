import 'react-native';
import React from 'react';
import { expect } from 'chai';
import NewContactForm from '../gen/components/NewContactForm.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('NewContactForm', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <NewContactForm />
    );
  });

  it('Renders a form', () => {
    const jsontree = renderer.create(<NewContactForm />).toJSON();
    expect(jsontree.children[0].type).to.equal('TextInput');
    expect(jsontree.children[1].type).to.equal('TextInput');
    expect(jsontree.children[2].type).to.equal('View');
    expect(jsontree.children[2].props.accessibilityComponentType).to.equal('button');
  });
});
