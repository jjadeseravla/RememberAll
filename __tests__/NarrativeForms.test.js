import 'react-native';
import React from 'react';
import { expect } from 'chai';
import NarrativeForm from '../gen/components/NarrativeForms.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('NarrativeForm', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <NarrativeForm />
    );
  });

  it('Renders a form', () => {
    const jsontree = renderer.create(<NarrativeForm />).toJSON();
    expect(jsontree.children[0].type).to.equal('TextInput');
    expect(jsontree.children[1].type).to.equal('TextInput');
    expect(jsontree.children[2].type).to.equal('TextInput');
    expect(jsontree.children[3].type).to.equal('View');
    expect(jsontree.children[3].props.accessibilityComponentType).to.equal('button');
  });
});
