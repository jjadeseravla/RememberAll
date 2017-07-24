import 'react-native';
import React from 'react';
import { expect } from 'chai';
import NewContactForm from '../gen/components/NewContactForm.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import realm from '../gen/models/realm'

describe('NewContact', () => {

  it('creates a new contact', () => {
    realm.write(() => {
    contact = realm.create('Contact', {name: 'Sally'});
    });
    expect(contact.name).to.equal('Sally');
  });

  it('adds multiple tags to a new contact', () => {
    realm.write(() => {
    contact = realm.create('Contact', {name: 'Jenny'});
    });
    realm.write(() => {
      tag = realm.create('Tag', {name: 'Vaporwave'})
    });
    realm.write(() => {
      contact.tags.push(tag)
    });
    console.log(contact);
    console.log(contact.tags);
    expect(contact.tags[0].name).to.equal('Vaporwave');
    // expect(contact.tags[1]).to.equal('rockin');
  });
});
