import Realm from 'realm';

class Contact {}
Contact.schema = {
    name: 'Contact',
    properties: {
    name: 'string',
    tags: {
      type: 'list', objectType: 'Tag'},
    },
};

class Tag {}
Tag.schema = {
  name: 'Tag',
  properties: {
  name: 'string',
  contacts: {
    type: 'list', objectType: 'Contact'},
  },
};

export default new Realm({ schema: [Contact, Tag] })
