import Realm from 'realm';

class Contact {}
Contact.schema = {
    name: 'Contact',
    properties: {
        name: 'string',
    },
};

export default new Realm({ schema: [Contact] })
