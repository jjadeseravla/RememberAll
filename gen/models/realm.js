var Realm = require('realm');

const ContactSchema = {
  name: 'Contact',
  properties: {
    name: 'string'
  }
};

const realm = new Realm({schema: [ContactSchema]});
