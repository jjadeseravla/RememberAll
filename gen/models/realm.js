import Realm from 'realm';

class Contact {}
Contact.schema = {
    name: 'Contact',
    properties: {
    name: 'string',
    tags: 'string',
    },
};

export default new Realm({ schema: [Contact] })
