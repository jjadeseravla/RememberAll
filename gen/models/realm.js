import Realm from 'realm';

class Contact {}
Contact.schema = {
  name: 'Contact',
  primaryKey: 'name',
  properties: {
    name: 'string',
    role: {type: 'string', optional: true},
    organisation: {type: 'string', optional: true},
    context: {type: 'string', optional: true},
    tags: {
      type: 'list', objectType: 'Tag'
    },
  },
};

class Tag {}
Tag.schema = {
    name: 'Tag',
    properties: {
    name: 'string',
    contacts: {
      type: 'list', objectType: 'Contact'
    },
  },
};

export default new Realm({ schema: [Contact, Tag] })
