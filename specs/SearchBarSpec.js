export default function(spec) {

  spec.describe('Filtering a contact', function() {

    spec.it('filters the contact on the page', async function() {
      await spec.fillIn('NewContactForm.TextInput', 'Suzy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('NewContactForm.TextInput', 'Timmy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('SearchBar.TextInput', 'Suzy');
      await spec.pause(1000);
      await spec.notExists('ContactEntry.Timmy');
      await spec.exists('ContactEntry.Suzy');
    });
  });
}
