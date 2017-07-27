import 'react-native';
import React from 'react';
import { expect } from 'chai';
import ContactDetails from '../gen/components/ContactDetails.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const navigationFake = {state: {params: {contact: {name: 'fakecontact', tags: ['faketag']}}}}

describe('ContactDetails', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <ContactDetails navigation={navigationFake} />
    );
  });

  it('Renders details of a contact', () => {
    const jsontree = renderer.create(<ContactDetails navigation={navigationFake} />).toJSON();
    expect(jsontree.children[0].children[1].type).to.equal('Text');
  });

  it('Renders an edit button', () => {
    const jsontree = renderer.create(<ContactDetails navigation={navigationFake} />).toJSON();
    expect(jsontree.children[0].children[5].type).to.equal('View');
    expect(jsontree.children[0].children[5].props.accessibilityComponentType).to.equal('button');
  })
});
