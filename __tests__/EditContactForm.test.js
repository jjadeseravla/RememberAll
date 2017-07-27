import 'react-native';
import React from 'react';
import { expect } from 'chai';
import EditContactForm from '../gen/components/EditContactForm.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import realm from '../gen/models/realm'

describe('ContactDetails', () => {

  let contactFake
  realm.write(() => {
    contactFake = realm.create('Contact', {name: 'JennyWem', role: 'Vaporlord', organisation: 'Vaporwave inc. ltd.', context: 'DreamWorld'});
  });

  const navigationFake = {state: {params: {contact: contactFake}}};

  it('renders correctly', () => {
    const tree = renderer.create(
      <EditContactForm navigation={navigationFake} />
    );
  });

  it('Renders a form with labels', () => {
    const jsontree = renderer.create(<EditContactForm navigation={navigationFake} />).toJSON();
    expect(jsontree.children[0].type).to.equal('Text');
    expect(jsontree.children[1].type).to.equal('Text');
    expect(jsontree.children[2].type).to.equal('TextInput');
    expect(jsontree.children[3].type).to.equal('Text');
    expect(jsontree.children[4].type).to.equal('TextInput');
    expect(jsontree.children[5].type).to.equal('Text');
    expect(jsontree.children[6].type).to.equal('TextInput');
    expect(jsontree.children[7].type).to.equal('View');
    expect(jsontree.children[7].props.accessibilityComponentType).to.equal('button');
  });
});
