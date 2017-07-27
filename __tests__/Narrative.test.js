import 'react-native';
import React from 'react';
import { expect } from 'chai';
import Narrative from '../gen/components/Narrative.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import realm from '../gen/models/realm'

describe('Narrative', () => {

  it('add specific info to a contact', () => {
    realm.write(() => {
    contact = realm.create('Contact', {name: 'Jenny Wem', role: 'Vaporlord', organisation: 'Makers Academy', context: 'Queer Code'});
    });
    expect(contact.role).to.equal('Vaporlord');
    expect(contact.organisation).to.equal('Makers Academy');
    expect(contact.context).to.equal('Queer Code');
  });

  // it('assembles a narrative from specific information', () => {
  //   realm.write(() => {
  //   contact = realm.create('Contact', {name: 'Jenny', role: 'Vaporlord', organisation: 'Makers Academy', context: 'Queer Code'});
  //   });
  //   // console.log(contact)
  //   console.log(this.createNewNarrative(contact))
  //   expect(this.createNewNarrative(contact)).to.equal('This is Jenny, who is a Vaporlord at Makers Academy. You met at Queer Code.')
  // });


});
