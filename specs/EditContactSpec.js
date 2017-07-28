export default function(spec) {

  spec.describe('Editing a contact', function() {

    spec.it('adds information to the contact', async function() {
      await spec.fillIn('NewContactForm.NameInput', 'Oberyn');
      await spec.press('NewContactForm.Button');
      await spec.press('Contact.Oberyn');
      await spec.press('ContactDetails.EditButton');
      await spec.fillIn('EditContactForm.OrganisationInput', 'House Martell');
      await spec.press('EditContactForm.Button');
      await spec.press('ContactDetails.HomeButton');
      await spec.fillIn('SearchBar.TextInput', 'Martell');
      await spec.exists('Contact.Oberyn');
    });
  });
}
