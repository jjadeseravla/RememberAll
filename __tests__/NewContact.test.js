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
    contact = realm.create('Contact', {name: 'Sally', tags: 'Cool'});
    });
    console.log(realm.objects('Contact'));
    expect(contact.name).to.equal('Sally');
    expect(contact.tags).to.equal('Cool');
  });
});
