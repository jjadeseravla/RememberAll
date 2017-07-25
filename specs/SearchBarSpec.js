export default function(spec) {

  spec.describe('Filtering a contact', function() {

    spec.it('filters the contact on the page', async () => {
      await spec.fillIn('NewContactForm.NameInput', 'Suzy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('NewContactForm.NameInput', 'Timmy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('SearchBar.TextInput', 'Suzy');
      await spec.pause(1000);
      await spec.notExists('ContactEntry.Timmy');
      await spec.exists('ContactEntry.Suzy');
    });

    spec.it('filters case-insensitively', async () => {
      await spec.fillIn('SearchBar.TextInput', 'timmy');
      await spec.pause(1000);
      await spec.notExists('ContactEntry.Suzy');
      await spec.exists('ContactEntry.Timmy');
    });
  });
}
