import React from 'react';
import { StackNavigator } from 'react-navigation';

import RememberAllApp from '../components/RememberAllApp';
import ContactDetails from '../components/ContactDetails';
import EditContactForm from '../components/EditContactForm';

export const Root = StackNavigator({
  Contacts: {
    screen: RememberAllApp,
  },
  Details: {
    screen: ContactDetails,
  },
  EditContact: {
    screen: EditContactForm,
  },
})
